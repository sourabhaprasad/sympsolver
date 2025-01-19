"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Accordion from "@components/Accordion";
import sections from "./symptomSection";
import axios from "axios";

const CheckerPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState(null);

  // Update selected symptoms
  const handleSymptomChange = (symptoms) => {
    setSelectedSymptoms(symptoms);
  };

  const handlePredict = async () => {
    if (!selectedSymptoms || selectedSymptoms.length === 0) {
      setError("Please select at least one symptom before predicting.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Sending symptoms:", selectedSymptoms);

      const response = await axios.post(
        "http://localhost:5000/predict",
        {
          symptoms: selectedSymptoms.map((s) =>
            s.toLowerCase().replace(" ", "_")
          ),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Received prediction:", response.data);

      // Save response to localStorage
      localStorage.setItem("predictionData", JSON.stringify(response.data));

      // Navigate to /predict
      router.push("/predict");
    } catch (err) {
      console.error("API Request Error:", err);
      setError(err.response?.data?.error || "Failed to fetch prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 font-merriweather">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Symptom Assessment
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2 bg-[#E8F2FF] p-8 lg:p-12 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Introduction
          </h2>
          <p className="text-lg leading-loose mb-6">
            Identify your symptoms. <br />
            Complete a brief evaluation. <br />
            Your information is secure and will remain confidential. <br />
            The results will provide:
          </p>
          <ul className="list-disc pl-5 text-lg leading-loose mb-8">
            <li>Potential reasons for your symptoms.</li>
            <li>Guidance on the next steps to take.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Terms of Service
          </h2>
          <p className="text-lg leading-loose mb-4">
            Important Information Before Using the Symptom Assessment:
            <br /> The results are for informational purposes only and do not
            constitute a medical diagnosis or professional opinion.
          </p>
          <ul className="list-disc pl-5 text-lg leading-loose">
            <li>Avoid using this tool in emergencies. </li>
            <li>
              In urgent situations, immediately contact your local emergency
              services.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 bg-[#E8F2FF] p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">
            What are your symptoms?
          </h2>
          <Accordion
            sections={sections}
            onSymptomChange={handleSymptomChange}
          />
          <div className="mt-6">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handlePredict}
              className="w-11/12 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
              disabled={selectedSymptoms.length === 0 || loading}
            >
              {loading ? "Processing..." : "Predict"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckerPage;
