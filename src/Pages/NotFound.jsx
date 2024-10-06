import React from "react";
import "./NotFound.css"; // Importing the CSS file for styles

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src="src\assets\404 Error Page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1 className="title">404 - Page Not Found</h1>
        <p className="description">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
