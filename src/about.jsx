import React from 'react';
import './about.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Earth Vision</h1>
      <p>
        Earth Vision is committed to transforming Earth Observation data into a powerful resource for agricultural communities, empowering farmers to make informed decisions through accessible and actionable insights. Our mission is to democratize access to satellite data, enabling farmers to harness real-time information for effective agricultural management.
      </p>
      <h2>Current Features</h2>
      <p>
        Our current features provide essential tools for optimal farming practices, including humidity monitoring for precise irrigation, analysis of rainfall patterns for strategic planning, and comprehensive tracking of water availability and stress through evapotranspiration and drought indices. Additionally, our AI-powered virtual agronomist offers 24/7 assistance, employing a natural language interface that simplifies complex queries and delivers personalized recommendations based on local conditions.
      </p>
      <h2>User-Friendly Interface</h2>
      <p>
        Earth Vision bridges the gap between advanced satellite technology and practical farming applications by offering a user-friendly interface designed specifically for farmers. Our mobile-first approach ensures that vital information is accessible in the field, with data visualizations simplified for easy interpretation. By translating technical data into real-world applications, we showcase success stories from early adopters, demonstrating the tangible benefits of integrating Earth Observation into daily farming practices.
      </p>
      <h2>Looking Ahead</h2>
      <p>
        Looking ahead, our roadmap includes community-focused features, such as an interactive farmer forum for knowledge sharing, expert-moderated discussions, and crop-specific groups that foster regional best practices. By cultivating a collaborative environment, Earth Vision aims to further enhance the agricultural landscape, supporting farmers in their quest for sustainable and productive practices.
      </p>
    </div>
  );
};

export default About;
