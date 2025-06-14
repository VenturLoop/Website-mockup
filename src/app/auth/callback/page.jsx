"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import dynamic from "next/dynamic";

// Dynamically import lottie-react to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// ✅ Utility function to load Lottie JSON from /public
const loadAnimation = async (path) => {
  const response = await fetch(path);
  return await response.json();
};

const AuthCallbackContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginUser } = useUser();

  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  const loadLottie = async (type) => {
    const path = {
      loading: "/lottie/success.json",
      success: "/lottie/success.json",
      error: "/lottie/error.json",
    }[type];
    const data = await loadAnimation(path);
    setAnimationData(data);
  };

  useEffect(() => {
    loadLottie("loading");

    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    if (!token || !userId) {
      setError("Missing token or user ID in URL.");
      setStatus("error");
      loadLottie("error");
      return;
    }

    const validate = async () => {
      try {
        const response = await fetch(
          `https://venturloopbackend-v-1-0-9.onrender.com/api/user/${userId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({
            message: "Token validation failed",
          }));
          throw new Error(errorData.message);
        }

        const data = await response.json();
        const validatedUser = data?.user;

        if (!validatedUser) {
          throw new Error("No user data returned");
        }

        const sessionResponse = await fetch("/api/auth/set-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, userId, userData: validatedUser }),
        });

        if (!sessionResponse.ok) {
          throw new Error("Failed to set session.");
        }

        loginUser(validatedUser);
        setStatus("success");
        loadLottie("success");

        setTimeout(() => router.push("/"), 2000);
      } catch (err) {
        setError(err.message || "Unexpected error");
        setStatus("error");
        loadLottie("error");
      }
    };

    validate();
  }, [searchParams, router, loginUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center px-4">
      {animationData && (
        <Lottie animationData={animationData} loop={status === "loading"} className="w-48 h-48" />
      )}

      {status === "loading" && (
        <p className="mt-2 text-gray-600">Verifying your account...</p>
      )}

      {status === "error" && (
        <>
          <h2 className="text-xl font-semibold text-red-600 mt-2">Authentication Failed</h2>
          <p className="text-gray-500">{error}</p>
          <a href="/login" className="text-indigo-600 underline mt-2">
            Click here to try logging in again.
          </a>
        </>
      )}

      {status === "success" && (
        <>
          <h2 className="text-xl font-semibold text-green-600 mt-2">Login Successful</h2>
          <p className="text-gray-500">Redirecting you to the dashboard...</p>
        </>
      )}
    </div>
  );
};

// ✅ Main wrapper with Suspense
const AuthCallbackPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading authentication...</div>}>
      <AuthCallbackContent />
    </Suspense>
  );
};

export default AuthCallbackPage;
