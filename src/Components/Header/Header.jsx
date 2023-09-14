// import CallToAction from './CallToAction'
import FloatWriter from "./FloatWriter";
import "./Header.css";
// import { useState } from "react";

const Header = () => {
  return (
    <header id="h-hero" className="h-hero flex">
      <div className="h-content">
        <h1 className="text-4xl">Hi! I&lsquo;m Favour Maxwell</h1>
        <div className="flex">
          <h1 className=" [letter-spacing:2px] font-semibold text-2xl">
            And I&lsquo;m a &nbsp;
          </h1>
          <FloatWriter />
        </div>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className=" text-white">
            Fugiat, itaque placeat dicta accusamus illum maxime voluptas illo
            nesciunt deleniti
          </span>
        </p>
        <div className="contact">
          <a href={<contact />}>
            Email:
            <span>makzymaxwell@gmail.com</span>
          </a>
        </div>
        <div className="btn-buttons">
          <button
            type="download"
            value={"Image"}
            onClick={e => {
              setDownloadCv(downloadCV);
              setDownloadCv(e.target.value);
            }}
          >
            {" "}Download CV
          </button>
          <button type="email" onClick={() => <contact />}>
            {" "}Hire Me
          </button>
        </div>
        <div className="socialIcons">
          <ul>
            <li>
              <a className="" aria-current="page" to="linkedin">
                linkedin
              </a>
            </li>
            <li>
              <a className="" aria-current="page" to="Whatsapp">
                Whatsapp
              </a>
            </li>
            <li>
              <a className="" aria-current="page" to="twitter">
                twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={".././assets/img/boy.png"} alt="boy" />
      </div>
    </header>
  );
};

export default Header;
