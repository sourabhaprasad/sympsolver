"use client";
import { useState } from "react";

const AccordionItem = ({ title, symptoms, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleCheckboxChange = (symptom) => {
    const updatedSymptoms = selectedSymptoms.includes(symptom)
      ? selectedSymptoms.filter((s) => s !== symptom)
      : [...selectedSymptoms, symptom];

    setSelectedSymptoms(updatedSymptoms);
    onSectionChange(updatedSymptoms); // Notify parent of updated symptoms
  };

  return (
    <div className="border rounded-lg bg-[#EBDAD2] bg-opacity-85 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-lg px-20 text-center"
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2">
          <form>
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-center text-lg mb-2">
                <input
                  type="checkbox"
                  id={`symptom-${title}-${index}`}
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleCheckboxChange(symptom)}
                  className="mr-2 p-4"
                />
                <label
                  htmlFor={`symptom-${title}-${index}`}
                  className="text-sm"
                >
                  {symptom}
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
