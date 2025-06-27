# SympSolver - AI-Driven Symptoms Analysis Platform

SympSolver is an AI-powered healthcare platform that provides real-time preliminary diagnosis, risk assessment, and personalized medical recommendations based on user-reported symptoms. The platform combines a **Next.js** web interface, **Flask** backend processing, a **Support Vector Machine (SVM) model** for disease prediction, and a **Dialogflow-based conversational chatbot** for interactive, accessible, and proactive health management.

---

## Project Description

SympSolver enables users to input their symptoms via a dropdown interface or an integrated chatbot and instantly receive:

* Probable diagnoses (SVM-based)
* Personalized health advice
* Lifestyle modification suggestions
* Emergency alerts for critical symptoms
* Nearby hospital recommendations via Google Maps integration

The system leverages a **Support Vector Machine (SVM)** model for highly accurate disease prediction and continuously refines its outputs based on updated user data.

---

## Features

* **SVM-Based Symptom Analysis**: Instant preliminary diagnosis using the SVM model with \~98% accuracy.
* **Conversational Chatbot**: Integrated using Dialogflow for symptom input, health queries, and follow-up advice.
* **Real-Time Predictions**: Backend Flask API processes inputs and serves live predictions.
* **Emergency Alerts**: Dynamically flags critical symptoms like chest pain or shortness of breath.
* **Nearby Hospital Locator**: Embedded Google Maps and OpenStreetMap to find nearby medical facilities.
* **Downloadable PDF Reports**: Users can download a summary of their diagnosis and recommendations.
* **User-Friendly Web Interface**: Built with Next.js and Tailwind CSS for responsive, smooth interaction.
* **Dynamic Critical Symptom Flagging**: Provides immediate emergency alerts when necessary.

---

## Tech Stack

### Frontend

* **Next.js** – React-based framework for building fast and scalable UIs.
* **Tailwind CSS** – Modern, utility-first CSS framework.
* **Axios** – For efficient API communication.
* **Google Maps API & OpenStreetMap API** – For hospital location services.

### Backend

* **Flask (Python)** – REST API to process symptoms and serve ML predictions.
* **Pickle** – Used to serialize and load trained ML models.
* **Support Vector Machine (SVM)** – Selected for its superior accuracy (\~98%), precision, and recall.
* **Additional ML Models Evaluated:** Random Forest, XGBoost, CatBoost, KNN, Multinomial Naive Bayes (for comparison).

### Chatbot

* **Dialogflow** – Conversational agent for symptom collection and user interaction.

---

## Project Structure

```plaintext
├── app/                 # Next.js frontend structure
├── components/          # UI components (symptom input, chatbot, result display)
├── public/              # Static assets (images, icons)
├── styles/              # Tailwind CSS configuration and styling
├── backend/             # Flask backend serving prediction API and ML models
├── requirements.txt     # Python dependencies for backend
├── README.md            # Project documentation
└── package.json         # Frontend dependencies
```

---

## Running the Project

### 1. Setup Backend (Flask)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The backend will be available at `http://localhost:5000`

### 2. Setup Frontend (Next.js)

```bash
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### 3. Chatbot Setup

* Import the provided **Dialogflow agent** in your Dialogflow console.
* Connect Dialogflow API to your frontend using the webhook integration provided.

---

## Future Enhancements

* Mobile Application Support
* Multilingual Chatbot Integration
* User Authentication & Symptom Tracking
* Integration with Electronic Health Records (EHR)
* Advanced Predictive Analytics for Long-Term Health Monitoring
* Deployment to Vercel / Netlify and Cloud Hosting for Flask API

