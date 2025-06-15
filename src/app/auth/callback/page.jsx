"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import dynamic from "next/dynamic";

// Dynamically import Lottie (client-only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AuthCallbackContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginUser } = useUser();

  const [loadingLottie, setLoadingLottie] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLottie = async () => {
      const res = await fetch("/lottie/loading.json");
      const data = await res.json();
      setLoadingLottie(data);
    };
    loadLottie();
  }, []);

  useEffect(() => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    if (!token || !userId) {
      setError("Missing token or user ID.");
      setStatus("error");
      return;
    }

    const validate = async () => {
      try {
        const userRes = await fetch(
          `https://venturloopbackend-v-1-0-9.onrender.com/api/user/${userId}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (!userRes.ok) throw new Error("User fetch failed");

        const { user } = await userRes.json();
        console.log("Current user Data ", user)
        if (!user) throw new Error("User not found");

        const sessionRes = await fetch("/api/auth/set-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, userId, userData: user }),
        });

        if (!sessionRes.ok) throw new Error("Failed to set session");

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log("AuthCallbackContent: User data stored in localStorage.");
        }
        loginUser(user);
        setStatus("success");
        setTimeout(() => router.push("/"), 2000);
      } catch (err) {
        setError(err.message || "Unexpected error");
        setStatus("error");
      }
    };

    validate();
  }, [searchParams, router, loginUser]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {loadingLottie && (
        <Lottie animationData={loadingLottie} loop className="w-60 h-60" />
      )}

      {status === "loading" && (
        <p className="mt-4 text-gray-600">Verifying your account...</p>
      )}

      {status === "error" && (
        <>
          <h2 className="text-xl font-semibold text-red-600 mt-4">
            Authentication Failed
          </h2>
          <p className="text-gray-500 mt-1">{error}</p>
          <a href="/" className="text-indigo-600 underline mt-2">
            Try logging in again
          </a>
        </>
      )}

      {/* {status === "success" && (
        <>
          <h2 className="text-xl font-semibold text-green-600 mt-4">
            Login Successful
          </h2>
          <p className="text-gray-500">Redirecting to dashboard...</p>
        </>
      )} */}
    </div>
  );
};

const AuthCallbackPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center text-gray-600">
          Loading authentication...
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
};

export default AuthCallbackPage;
