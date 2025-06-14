"use client";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getListData } from "@/lib/backendApi";

export default function PrivacyPolicyCompo({ title }) {
  const [data, setdata] = useState(null);
  const [data2, setdata2] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const results = await getListData(title);
        setdata(results?.data);
        setdata2(results?.data2);
      } catch (error) {
        console.error("Failed to fetch policy:", error);
      } finally {
        setLoading(false); // Hide loader once done
      }
    };
    fetchApiData();
  }, [title]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            {data?.title || title}
          </h1>

          {/* Show loader while fetching */}
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
            </div>
          ) : (
            <div className="prose dark:prose-invert max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
              {data2 && (
                <>
                  {data2["disc1"] && <p>{data2["disc1"]}</p>}
                  {data2["disc2"] && <p>{data2["disc2"]}</p>}
                  {data2["Effective Date"] && (
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Effective Date:</strong> {data2["Effective Date"]}
                    </p>
                  )}
                </>
              )}

              {data?.map((section, i) => (
                <div key={i} className="mt-8">
                  <h2>{section.title}</h2>

                  {section.description && <p>{section.description}</p>}
                  {section.disc && <p>{section.disc}</p>}

                  {section.listItems && Array.isArray(section.listItems) && (
                    <ul className="list-disc pl-5">
                      {section.listItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.data && Array.isArray(section.data) && (
                    <div className="mt-4 space-y-4">
                      {section.data.map((sub, j) => (
                        <div key={j}>
                          <h3>{sub.title}</h3>
                          <p>{sub.description}</p>
                          {sub.disc && <p>{sub.disc}</p>}
                          {sub.listItems && Array.isArray(sub.listItems) && (
                            <ul className="list-disc pl-5">
                              {sub.listItems.map((item, k) => (
                                <li key={k}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
