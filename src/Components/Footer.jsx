import React from "react";
import "./FooterDesign.css";

const Footer = () => {
  return (
    <footer className="footer-style py-3">
      <div className="container text-center">
        <a href="https://www.bursa.bel.tr/">
          <img
            src="https://www.besasekmek.com.tr/images/bb_logo.png"
            alt="bbblogo"
          />
        </a>
        <a href="https://www.besasekmek.com.tr/">
          <img
            className="footerimg"
            src="https://www.besasekmek.com.tr/images/11111footer.png"
            alt="besaslogo"
          />
        </a>
        <p className="footer-text">
          &copy; 2024 Bursa Ekmek ve Besin Sanayi ve Ticaret A.Ş.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
