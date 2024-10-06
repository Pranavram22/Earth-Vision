import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/LoginPage"; // Import the Login page
import ChatBot from "./Chatbot"; // Import the Chatbot component
import NotFound from "./Pages/NotFound";
import About from "./about";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Login route is here */}
            <Route path="/chatbot" element={<ChatBot />} /> {/* Chatbot route */}
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

