import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Initialize Botpress webchat
    const loadBotpress = async () => {
      // Load the inject script
      const script1 = document.createElement('script');
      script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script1.async = true;
      document.body.appendChild(script1);

      // Wait for the first script to load before loading the second
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = "https://files.bpcontent.cloud/2024/10/06/06/20241006063442-1VWT9OP0.js";
        script2.async = true;
        document.body.appendChild(script2);
      };
    };

    loadBotpress();

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="botpress"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <video className="background-video" autoPlay muted loop>
          <source src="src/assets/56431-479644933.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Unleash the Power of Earth Observation Data
          </h1>
          <h2 className="hero-subtitle">Revolutionize Your World</h2>
          <a href="https://nasairrigationdata.vercel.app/">
            <button className="hero-button">Get Started</button>
          </a>
        </div>
      </div>

      {/* Insights Section */}
      <section className="insights-section">
        <div className="insights-container">
          <h2 className="insights-title">Unlock the Insights You</h2>
          <p className="insights-subtitle">
            Elevate Your Agricultural Operations with Precision Data: Empower
            Your Business with Our Comprehensive Suite of Tools
          </p>
          <div className="insights-grid">
            {/* Card 1 */}
            <div className="insight-card">
              <i className="icon-power"></i>
              <h3>Harness the Power of</h3>
              <p>
                Unlock Insights, Optimize Decisions, and Drive Sustainable
                Growth in your agricultural operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="insight-card">
              <i className="icon-soil"></i>
              <h3>Soil Insights</h3>
              <p>
                Uncover the Hidden Treasures of Your Soil: Our Soil Data
                Analytics Provide a wealth of insights.
              </p>
            </div>

            {/* Card 3 */}
            <div className="insight-card">
              <i className="icon-water"></i>
              <h3>Water Management</h3>
              <p>
                Optimize Your Irrigation Strategies: Our Water Insights Empower
                You to improve efficiency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="insight-card">
              <i className="icon-weather"></i>
              <h3>Weather Forecasting</h3>
              <p>
                Stay One Step Ahead: Our Precise Weather Forecasting Tools help
                you plan accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Section */}
      <section className="agri-section">
        <div className="layout-grid">
          {/* Left Side - Content */}
          <div className="text-content">
            <h1>Empowering Agricultural</h1>
            <p>
              Welcome to our cutting-edge agricultural platform, where satellite
              Earth observation data and advanced analytics converge to
              revolutionize the way you manage your farm.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <i className="icon-global"></i>
                <div className="feature-details">
                  <h3>Explore Our Solutions</h3>
                  <p>
                    Harness the power of satellite imagery: our platform
                    seamlessly integrates Earth data.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <i className="icon-data"></i>
                <div className="feature-details">
                  <h3>Unlock the Insights You Need</h3>
                  <p>
                    Our advanced analytics engine transforms raw data into
                    actionable intelligence.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <i className="icon-industry"></i>
                <div className="feature-details">
                  <h3>Empower Your Business</h3>
                  <p>
                    Unlock a world of possibilities with our comprehensive suite
                    of tools and services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="image-preview">
            <img src="src/assets/lg.png" alt="Platform Preview" />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <div>
        <div className="Explore">
          <h1>Explore Our Platform</h1>
          <h2>Unlock the Insights You Need</h2>
          <p>
            Discover how our advanced platform can transform your agricultural
            operations
          </p>
          <div className="image-gallery">
            <div className="image-container">
              <img src="src/assets/11.png" alt="Platform Preview 1" />
            </div>
            <div className="image-container">
              <img src="src/assets/22.png" alt="Platform Preview 2" />
            </div>
            <div className="image-container">
              <img src="src/assets/33.png" alt="Platform Preview 3" />
            </div>
            <div className="image-container">
              <img src="src/assets/44.png" alt="Platform Preview 4" />
            </div>
          </div>
          <div className="insights">
            <div className="insight">
              <i className="icon-power"></i>
              <h3>Soil Data</h3>
              <p>Uncover the secrets of your soil with our</p>
            </div>

            <div className="insight">
              <i className="icon-soil"></i>
              <h3>Water Insights</h3>
              <p>Conserve this precious resource and</p>
            </div>

            <div className="insight">
              <i className="icon-water"></i>
              <h3>Weather</h3>
              <p>Stay one step ahead of the weather</p>
            </div>

            <div className="insight">
              <i className="icon-weather"></i>
              <h3>Precision</h3>
              <p>Leverage the power of precision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="container">
        <section className="hero">
          <h1>Explore Our Tools</h1>
          <h2>Uncover the Insights You Need</h2>
          <div className="cards">
            <div className="card">
              <div className="icon"></div>
              <h3>Your Agricultural AI</h3>
              <p>
                Elevate your farming operations with our cutting-edge
                agricultural AI, which seamlessly integrates satellite data,
                weather forecasts, and more.
              </p>
              <button>Get Started</button>
            </div>
            <div className="card">
              <div className="icon"></div>
              <h3>Precision Farming</h3>
              <p>
                Harness the power of precision farming with our
                advanced tools and services. From high-resolution 
                satellite imagery to real-time data analysis.
              </p>
              <button>Explore Now</button>
            </div>
            <div className="card_1">
              <div className="icon"></div>
              <h3>Farming</h3>
              <p>
                Discover the future of sustainable farming with Farming
                Formatto. Leverage AI-driven insights for optimal crop
                management and resource efficiency.
              </p>
              <button>Explore Our Platform</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <img
              src="src/components/logo.png"
              alt="EarthVision Logo"
              className="footer-logo"
            />
            <p>© 2024 EarthVision, Inc. All rights reserved.</p>
          </div>

          <div className="footer-section resources">
            <h3>Resources</h3>
            <nav className="footer-nav">
              <a href="/faqs">FAQs</a>
              <a href="/blog">Blog</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/partnership">Partnership</a>
            </nav>
          </div>

          <div className="footer-section company">
            <h3>Company</h3>
            <nav className="footer-nav">
              <a href="/our-story">Our Story</a>
              <a href="/team">Team</a>
              <a href="/careers">Careers</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section connect">
            <h3>Connect</h3>
            <nav className="footer-nav">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;