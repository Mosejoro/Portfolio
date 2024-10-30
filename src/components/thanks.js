import React from "react";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="thanks-container">
      <div className="thanks-content">
        <h1>Thank You!</h1>
        <p>
          Your message has been successfully sent. We'll get back to you soon!
        </p>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
