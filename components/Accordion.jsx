// components/Accordion.jsx
import AccordionItem from "./AccordionItem";

const Accordion = ({ sections, onSymptomChange }) => {
  const handleSectionChange = (symptoms) => {
    onSymptomChange(symptoms); // Pass updated symptoms to CheckerPage
  };

  return (
    <div className="max-auto space-y-4">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          symptoms={section.symptoms}
          onSectionChange={handleSectionChange}
        />
      ))}
    </div>
  );
};

export default Accordion;
