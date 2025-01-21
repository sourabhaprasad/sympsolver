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
      <h1 className="text-3xl font-bold mb-8 text-center">
        Symptom Assessment
      </h1>
      <div className="flex flex-col mx-10 lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2 bg-[#E8F2FF] p-8 lg:p-12 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Introduction
          </h2>
          <p className="text-[16px] leading-normal mb-6">
            Identify your symptoms. <br />
            Complete a brief evaluation. <br />
            Your information is secure and will remain confidential. <br />
            The results will provide:
          </p>
          <ul className="list-disc pl-5 text-[16px] leading-normal mb-8">
            <li>Potential reasons for your symptoms.</li>
            <li>Guidance on the next steps to take.</li>
          </ul>
          <h2 className="text-xl font-semibold mb-6 text-center">
            Terms of Service
          </h2>
          <p className="text-[16px] leading-normal mb-4">
            Important Information Before Using the Symptom Assessment:
            <br /> The results are for informational purposes only and do not
            constitute a medical diagnosis or professional opinion.
          </p>
          <ul className="list-disc pl-5 text-[16px] leading-normal">
            <li>Avoid using this tool in emergencies. </li>
            <li>
              In urgent situations, immediately contact your local emergency
              services.
            </li>
          </ul>
          <div>
            <h2 className="text-lg text-center font-semibold my-6">
              Symptoms needing immediate medical attention.
            </h2>
            <ul className="list-disc pl-2 text-[16px] leading-loose mb-8">
              {[
                {
                  name: "Slurred Speech",
                  advice:
                    "Slurred speech could indicate a stroke or neurological emergency.",
                },
                {
                  name: "Loss of balance",
                  advice:
                    "Loss of balance may indicate a stroke, brain injury, or neurological disorder.",
                },
                {
                  name: "Yellowish skin",
                  advice: "Yellowish skin can indicate liver or bile problems.",
                },
                {
                  name: "Bloody stool",
                  advice:
                    "Severe abdominal pain with bloody stool could indicate gastrointestinal bleeding or other severe conditions.",
                },
                {
                  name: "Yellowing of eyes",
                  advice:
                    "Yellowing of eyes may indicate liver failure or jaundice.",
                },
                {
                  name: "Breathlessness",
                  advice:
                    "Breathlessness can indicate a heart attack, severe respiratory condition, or pulmonary embolism.",
                },
                {
                  name: "Chest pain",
                  advice:
                    "Chest pain could be a sign of a heart attack, angina, or other serious cardiac conditions.",
                },
                {
                  name: "Blood in sputum",
                  advice:
                    "Blood in sputum can indicate severe respiratory or pulmonary issues like tuberculosis or lung cancer.",
                },
                {
                  name: "Weakness of one body side",
                  advice:
                    "Weakness of one body side can indicate stroke or severe neurological damage.",
                },
                {
                  name: "Irregular sugar level",
                  advice:
                    "Irregular sugar levels can indicate diabetic crisis, either hyperglycemia or hypoglycemia.",
                },
                {
                  name: "Stomach bleeding",
                  advice:
                    "Stomach bleeding requires immediate attention due to potential for life-threatening internal bleeding.",
                },
              ].map((symptom, index) => (
                <li key={index} className="relative flex items-center gap-2">
                  {symptom.name}
                  <span className="relative group text-sm">
                    <span className="text-xs">🚩</span>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-60 p-2 text-sm text-white bg-black rounded-md shadow-lg">
                      {symptom.advice}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 bg-[#E8F2FF] p-8 rounded-lg shadow">
          <h2 className="text-xl text-center font-semibold mb-6">
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
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
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
