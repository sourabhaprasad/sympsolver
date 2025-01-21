import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-full font-merriweather">
        {" "}
        <div className="py-10 px-40 w-7/12 mb-10">
          {" "}
          {/* Adjust width and padding as needed */}
          <h1 className="text-3xl font-semibold mb-8  leading-relaxed">
            Symptom evaluator designed for{" "}
            <span className="blue_gradient">you</span> to
          </h1>
          <ul className="space-y-6">
            {" "}
            {/* Add spacing between list items */}
            <li>✔️ Assess your symptoms.</li>
            <li>✔️ Gain insights into your health.</li>
            <li>✔️ Prepare for your next course of action.</li>
            <li>✔️ Get ready for your medical consultation.</li>
          </ul>
          <Button text="Start Symptom Checker" href="/checker" />{" "}
        </div>
        <div className="w-1/2 flex justify-center">
          {" "}
          <img
            src="/images/hero-1.jpg"
            alt="Description"
            className="w-200 h-auto max-w-md"
          />
        </div>
      </div>
      <div className="flex justify-between items-center font-merriweather my-20">
        <div className="w-1/2 flex justify-center">
          {" "}
          <img
            src="/images/hero2.avif"
            alt="Description"
            className="w-7/12 h-auto max-w-md rounded-full"
          />
        </div>
        <div className=" px-20 w-6/12">
          {" "}
          <h1 className="text-3xl text-right font-semibold mb-8 pl-2 leading-relaxed">
            {" "}
            About <span className="blue_gradient">SympSolver</span>
          </h1>
          <p className="leading-relaxed text-right">
            SympSolver is a user-friendly symptom checker that helps you
            identify and understand your symptoms. It provides insights into
            possible diseases, detailed descriptions, recommended precautions,
            as well as suggested workouts and diets to improve your health. It
            also helps you prepare for your upcoming medical visit.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center h-full font-merriweather">
        {" "}
        <div className="p-20 w-6/12 my-10">
          {" "}
          <h1 className="text-3xl font-semibold mb-8 pl-2 leading-relaxed">
            How does it work?{" "}
          </h1>
          <p className="leading-relaxed">
            Using SympSolver is simple and straightforward. Just input your
            symptoms into the tool, and SympSolver will analyze them to identify
            potential diseases and conditions. Based on your input, it provides
            a detailed description of the condition, suggests relevant
            precautions, and offers customized workout and diet recommendations
            to help manage your health. SympSolver aims to guide you through
            understanding your symptoms and preparing for your next steps,
            whether it’s self-care or visiting a healthcare professional.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          {" "}
          <img
            src="/images/hero4.webp"
            alt="Description"
            className="w-7/12 h-auto max-w-md rounded-full opacity-80"
          />
        </div>
      </div>
      <h1 className="text-center text-3xl font-semibold mb-8 pl-2 leading-relaxed font-merriweather">
        How to use?
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10 m-10 font-merriweather">
        <div className="bg-[#EBDAD2] p-12 rounded-lg shadow-md text-center">
          <h3 className="mb-2">1. Open SympSolver when you're feeling ill.</h3>
          <img
            src="/images/sick.webp"
            alt="Description 1"
            className="mx-auto w-200 h-auto"
          />
        </div>

        <div className="bg-[#EBDAD2] p-12 rounded-lg shadow-md text-center">
          <h3 className="mb-2">2. Select the symptoms you're experiencing</h3>
          <img
            src="/images/select-symptoms.png"
            alt="Description 2"
            className="mx-auto w-250 h-auto object-contain"
          />
        </div>

        <div className="bg-[#EBDAD2] p-12 rounded-lg shadow-md text-center">
          <h3 className="mb-2">
            3. Recieve the most likely diagnosis along with recommendations.
          </h3>
          <img
            src="/images/feedback.png"
            alt="Description 3"
            className="mx-auto w-200 h-auto"
          />
        </div>
      </section>
      <div className="font-merriweather w-3/5 m-20">
        <h1 className="text-3xl font-semibold leading-relaxed mb-5">
          Disclaimer
        </h1>
        <p className="text-lg leading-relaxed">
          SympSolver is not a substitute for professional medical advice,
          diagnosis, or treatment. It provides information to assist with
          understanding symptoms based on general knowledge and should not
          replace the judgment of a licensed healthcare provider. For any
          concerns or questions about the results from SympSolver, please
          consult your healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default Hero;
