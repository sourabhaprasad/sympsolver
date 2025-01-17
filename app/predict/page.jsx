"use client";
import Button from "@components/Button";
import { useState } from "react";

const Page = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (item) => {
    setExpanded((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const items = [
    {
      title: "Predicted Disease",
      description: "Disease Name",
    },
    {
      title: "Description",
      description: "Description of Predicted Disease",
    },
    { title: "Precaution", description: "Precautionary measures" },
    { title: "Self-Care", description: "Self-care tips" },
    {
      title: "Diets",
      description: "Food",
    },
    { title: "Symptoms", description: "Symptoms to watch for" },
    { title: "Risk Factors", description: "Risk factors involved" },
    {
      title: "When to See Doctor",
      description: "Guidelines on when to consult a doctor",
    },
  ];

  return (
    <div className="p-4 font-merriweather">
      <h1 className="text-3xl font-bold text-center mb-10">Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#E8F2FF] p-4 rounded-lg cursor-pointer p-15 mx-20"
            onClick={() => toggleExpand(item.title)}
          >
            <h1 className="text-xl font-semibold">{item.title}</h1>
            {expanded[item.title] && <p className="mt-2">{item.description}</p>}
          </div>
        ))}
      </div>
      <section className="text-center m-10">
        <Button text="Download PDF" href="/" />
      </section>
    </div>
  );
};

export default Page;
