import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
   <footer className="footer">
  © {new Date().getFullYear()} Nipuna Edu Consultants 
  <span className="info">
    {" "} | Designed & Developed by{" "}
    <a 
      href="https://aspireths.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="footer-link"
    >
      Aspire Tekhub Solutions.
    </a>
  </span>
</footer>
  );
};

export default Footer;
