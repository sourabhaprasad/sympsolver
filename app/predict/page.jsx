"use client";
import { useEffect, useState } from "react";
import Button from "@components/Button";

const PredictPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Retrieve prediction data from localStorage
    const predictionData = localStorage.getItem("predictionData");
    if (predictionData) {
      setData(JSON.parse(predictionData));
    }
  }, []);

  if (!data) {
    return (
      <div className="p-4 font-merriweather">
        <h1 className="text-3xl font-bold text-center mb-10">
          No Results Found
        </h1>
        <p className="text-center">Please go back and try again.</p>
      </div>
    );
  }

  const {
    predicted_disease = "Disease not found",
    desc = "No description available.",
    pre = [["No precautions available."]],
    die = [["No diet information available."]],
    wrkout = ["No workout recommendations available."],
    sym = ["No symptoms available."],
    riskfactors = ["No risk factors available."],
    appointment = "No appointment details available.",
  } = data;

  console.log(die); // testing

  return (
    <div className="p-4 font-merriweather mx-40">
      <h1 className="text-4xl font-bold text-center mb-10">Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-40 mb-20">
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Predicted Disease
          </h2>
          <p className="font-bold p-4">{predicted_disease}</p>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Description
          </h2>
          <p>{desc}</p>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Precautions
          </h2>
          <ul className="list-disc pl-6 p-4">
            {pre.map((item, index) => (
              <li key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Diet Recommendations
          </h2>
          <ul className="list-disc pl-6 p-4">
            {die.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">Self-Care</h2>
          <ul className="list-disc pl-6 p-4">
            {wrkout.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">Symptoms</h2>
          <ul className="list-disc pl-6 p-4">
            {sym.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Risk Factors
          </h2>
          <ul className="list-disc pl-6 p-4">
            {riskfactors.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-2xl text-center my-4 font-semibold">
            Recommended Appointment
          </h2>
          <p className="p-6">{appointment}</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <Button text="Download PDF" href="/" />
      </div>
    </div>
  );
};

export default PredictPage;
