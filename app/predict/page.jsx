"use client";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

const PredictPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
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

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 40;

    // Title
    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text("Results", 20, yPos);
    yPos += 10;

    // Predicted Disease (bold heading)
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text("Predicted Disease: " + predicted_disease, 20, yPos);
    yPos += 10;

    // Description (with text wrapping, bold heading)
    doc.setFont("times", "bold");
    const descriptionLines = doc.splitTextToSize("Description: " + desc, 180); // 180 is the max width for wrapping
    doc.text(descriptionLines, 20, yPos);
    yPos += descriptionLines.length * 10 + 10;

    // Function to add content and check for page overflow, with bold heading
    const addContentWithPageCheck = (contentArray, yPosition, label) => {
      if (yPosition + contentArray.length * 10 + 10 > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.text(label, 20, yPosition);
      yPosition += 10;
      doc.setFont("times", "normal"); // Set back to normal for content
      contentArray.forEach((item, index) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(index + 1 + ". " + item, 20, yPosition);
        yPosition += 10;
      });
      return yPosition;
    };

    yPos = addContentWithPageCheck(pre, yPos, "Precautions:");

    yPos = addContentWithPageCheck(die, yPos, "Diet Recommendations:");

    yPos = addContentWithPageCheck(wrkout, yPos, "Self-Care (Workout):");

    yPos = addContentWithPageCheck(sym, yPos, "Symptoms:");

    yPos = addContentWithPageCheck(riskfactors, yPos, "Risk Factors:");

    doc.setFont("times", "bold");
    const appointmentLines = doc.splitTextToSize(
      "Recommended Appointment: " + appointment,
      180
    );
    doc.text(appointmentLines, 20, yPos);

    // Save the PDF
    doc.save("prediction_results.pdf");
  };

  return (
    <div className="p-4 font-merriweather mx-40">
      <h1 className="text-2xl font-bold text-center mb-10">Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10">
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Predicted Disease
          </h2>
          <p className="font-bold text-lg p-4">{predicted_disease}</p>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Description
          </h2>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Precautions
          </h2>
          <ul className="list-disc text-sm pl-6 p-4">
            {pre.map((item, index) => (
              <li key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Diet Recommendations
          </h2>
          <ul className="list-disc text-sm pl-6 p-4">
            {die.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">Self-Care</h2>
          <ul className="list-disc text-sm pl-6 p-4">
            {wrkout.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">Symptoms</h2>
          <ul className="list-disc text-sm pl-6 p-4">
            {sym.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Risk Factors
          </h2>
          <ul className="list-disc text-sm pl-6 p-4">
            {riskfactors.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#E8F2FF] p-4 rounded-lg">
          <h2 className="text-lg text-center my-4 font-semibold">
            Recommended Appointment
          </h2>
          <p className="p-6 text-sm">{appointment}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* Replace the custom button with a normal HTML button */}
        <button
          onClick={generatePDF}
          className="bg-blue-500 text-white text-xl mb-20 px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PredictPage;
