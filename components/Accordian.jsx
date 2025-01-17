// components/Accordion.jsx
import AccordionItem from "./AccordianItem";

const Accordion = ({ sections }) => {
  return (
    <div className="max-w-lg space-y-4">
      {" "}
      {/* mx-auto  */}
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          symptoms={section.symptoms}
        />
      ))}
    </div>
  );
};

export default Accordion;
