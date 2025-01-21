"use client";
import { useState } from "react";

export default function Page() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch("http://localhost:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="font-merriweather flex flex-col items-center justify-center p-4">
      <h1 className="text-center font-semibold text-4xl mb-12">ChatBot</h1>
      <div className="bg-[#F0F0F0] w-full max-w-3xl rounded-lg shadow-md p-6 mb-20">
        <div className="flex items-center bg-[#E8E5E5] rounded-lg p-6 mb-6">
          <div className="w-40 h-40 bg-gray-200 rounded-full flex-shrink-0">
            <img
              src="/images/chatbot1.jpg"
              alt="chatbot"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="ml-6 flex flex-col space-y-2 h-full text-center sm:text-left">
            <h1 className="font-bold text-2xl">Medical Assistant</h1>
            <h3 className="text-gray-700">What do you want to know?</h3>
            <p className="text-gray-600 text-sm">
              I am here to help you with your medical queries. Feel free to ask
              anything!
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {response && (
            <div className="flex items-center bg-[#CCE9DB] rounded-lg p-4">
              <div className="w-10 h-10 rounded-full mr-3">
                <img src="/icons/robot.png" alt="chatbot" />
              </div>
              <p className="text-gray-900">{response}</p>
            </div>
          )}
          {query && (
            <div className="flex justify-between items-center bg-[#C6E3FC] rounded-lg p-4">
              <p className="text-gray-900 text-right flex-1">{query}</p>
              <div className="w-10 h-10 rounded-full ml-3">
                <img src="/icons/user.png" alt="user" />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6">
          <iframe
            width="720"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/f75e7be7-c8e6-4a0a-afc0-a81314584e58"
            className="border rounded-lg shadow-md w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
