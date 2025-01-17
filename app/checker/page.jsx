// pages/checker/page.jsx
import Accordion from "@components/Accordian";
import sections from "./symptomSection";
import Button from "@components/Button";

const CheckerPage = () => {
  return (
    <div className="min-h-screen p-6 font-merriweather">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Symptom Assessment
      </h1>
      <div className="flex">
        <div className="w-1/2 bg-[#E8F2FF] m-16 p-20 rounded shadow ">
          <h1 className="text-2xl font-semibold m-8 text-center">
            Introduction
          </h1>
          <p className="text-lg leading-loose">
            Identify your symptoms. <br />
            Complete a brief evaluation. <br />
            Your information is secure and will remain confidential. <br />
            The results will provide:
          </p>
          <ul className="list-disc pl-5 text-lg leading-loose">
            <li>Potential reasons for your symptoms.</li>
            <li>Guidance on the next steps to take.</li>
          </ul>
          <h1 className="text-2xl font-semibold m-8 text-center">
            Terms of Service
          </h1>
          <p className="text-lg leading-loose">
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
        <div className="m-16 w-1/2 pl-4 bg-[#E8F2FF] justify-items-center p-4 rounded shadow">
          <h1 className="text-2xl font-semibold m-2 mb-4">
            What are your symptoms?
          </h1>
          <Accordion sections={sections} />
          <Button text="Predict" href="/predict" />
        </div>
      </div>
    </div>
  );
};

export default CheckerPage;
