"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const searchParams = useSearchParams();
  const [result, setResult] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const symptomsParam = searchParams.get("symptoms");
        if (!symptomsParam) {
          throw new Error("No symptoms provided");
        }

        const symptoms = JSON.parse(decodeURIComponent(symptomsParam));
        const response = await axios.post("http://localhost:5000/predict", {
          symptoms,
        });

        setResult(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [searchParams]);

  const toggleExpand = (item) => {
    setExpanded((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>No prediction results available</p>
        </div>
      </div>
    );
  }

  const items = [
    {
      title: "Predicted Disease",
      content: result.predicted_disease,
    },
    {
      title: "Description",
      content: result.desc,
    },
    {
      title: "Precautions",
      content: result.pre.flat().filter(Boolean).join("\n• "),
    },
    {
      title: "Self-Care",
      content: Array.isArray(result.wrkout)
        ? result.wrkout.join("\n• ")
        : result.wrkout,
    },
    {
      title: "Recommended Diet",
      content: Array.isArray(result.die) ? result.die.join("\n• ") : result.die,
    },
    {
      title: "Common Symptoms",
      content: Array.isArray(result.sym) ? result.sym.join("\n• ") : result.sym,
    },
    {
      title: "Risk Factors",
      content: Array.isArray(result.riskfactors)
        ? result.riskfactors.join("\n• ")
        : result.riskfactors,
    },
    {
      title: "When to See a Doctor",
      content: Array.isArray(result.appointment)
        ? result.appointment.join("\n• ")
        : result.appointment,
    },
  ];

  return (
    <div className="p-4 font-merriweather min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Health Assessment Results
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(item.title)}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                {expanded[item.title] && (
                  <div className="mt-4 text-gray-600 whitespace-pre-line">
                    {item.content
                      ? `• ${item.content}`
                      : "No information available"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
