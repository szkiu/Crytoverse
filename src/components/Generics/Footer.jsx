import React from "react";
import "./Footer.css"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {

  return (
    <footer >
      <p>Copyright &copy; 2022 Cryptoverse Inc.</p>
      <div className="footer-social" style={{display: "flex"}} >
        <a
          href="https://www.linkedin.com/in/augusto-andres-mendez/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/sZKiu" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


