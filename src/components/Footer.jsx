import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 flex justify-center backdrop-blur shadow dark:shadow-white shadow-black dark:text-white relative z-10">
      <div className="container text-center">
        {/* Website Ownership & Copyright */}
        <h5 className="fw-bold">This website belongs to Joyal George K J</h5>
        <p className="text-muted">&copy; {new Date().getFullYear()} All Rights Reserved.</p>

        {/* Icon & Tool Attribution */}
        <div className="mt-3">
          <p className="mb-1">
            Icons used from 
            <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="text-info mx-1">Bootstrap Icons</a> 
            & 
            <a href="https://devicon.dev/" target="_blank" rel="noopener noreferrer" className="text-info mx-1">Devicon</a>.
          </p>
          <p>
            <strong>React JS, React DOM, React Redux, Appwrite, MUI</strong>.
          </p>
        </div>

        {/* Social Media Icons */}
        {/* <Socials /> */}
      </div>
    </footer>
  );
}

export default Footer;
