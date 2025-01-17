const page = () => {
  return (
    <div className="font-merriweather">
      <div className="m-20">
        <h1 className="text-4xl font-semibold mb-5">About Us</h1>
        <p className="w-3/5 leading-relaxed text-xl">
          SympSolver is designed to help users better understand their symptoms
          and make informed decisions about their health. Whether you’re seeking
          advice, a potential diagnosis, or emergency assistance, SympSolver
          guides you through the process with personalized recommendations,
          real-time updates, and a user-friendly interface.
        </p>
      </div>
      <div className="m-20">
        <h1 className="text-4xl font-semibold mb-5">What we offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">User Friendly Interface</h1>
            <p className="mb-4 text-lg">
              Quickly select the symptoms from the dropdown.
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image1.jpg"
              alt="Description 1"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">
              Machine Learning Diagnosis
            </h1>
            <p className="mb-4 text-lg">
              Get predictions and explanations for possible conditions based on
              your symptoms.
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image2.jpg"
              alt="Description 2"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">
              Personalized Health Recommendations
            </h1>
            <p className="mb-4 text-lg">
              Receive tailored advice on tests, lifestyle changes, remedies, and
              consultations.
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image3.jpg"
              alt="Description 3"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">
              Real-Time Emergency Alerts
            </h1>
            <p className="mb-4 text-lg">
              Identify critical symptoms and receive emergency alerts, plus
              nearby hospital suggestions.
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image4.jpg"
              alt="Description 4"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">Conversational ChatBot</h1>
            <p className="mb-4 text-lg">
              Ask questions and get instant answers with our friendly chatbot
              interface.
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image4.jpg"
              alt="Description 5"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-[#E8F2FF] p-4 m-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">Health Guidance</h1>
            <p className="mb-4 text-lg">
              Step-by-step updates to guide your next steps in managing your
              health.{" "}
            </p>
            {/* Replace with your image */}
            <img
              src="/path/to/image4.jpg"
              alt="Description 6"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
