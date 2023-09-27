import React from "react";
import FloatWriter from "./FloatWriter";
import "./Header.css";
import boy from "../../assets/img/boy.png";
import { FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Blob from './Blob'

const Header = () => {
  return (
    <header id="h-hero" className="h-hero flex">
      <div className="h-content">
        <h1 className="text-4xl font-bold">Hi! I'm Favour Maxwell</h1>
        <div className="flex">
          <h1 className="inline-flex [letter-spacing:2px] font-semibold text-2xl">
            And I'm{" "}
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
        <div className="contact font-medium">
          <div className="email-info">
            <h5 className="text-white font-bold">Email:</h5>
            <span className="text-white">makzymaxwell@gmail.com</span>
          </div>
        </div>
        <div className="btn-buttons">
          <button
            className="btn"
            type="download"
            value={"Image"}
            onClick={(e) => {
              setDownloadCv(downloadCV);
              setDownloadCv(e.target.value);
            }}
          >
            {" "}
            Download CV
          </button>
          <button className="btn" type="email" onClick={() => <contact />}>
            {" "}
            Hire Me
          </button>
        </div>
        <div className="socialIcons flex max-w-max mx-auto lg:mx-0">
          <a href="#" aria-current="page">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-current="page">
            <FaWhatsapp />
          </a>
          <a href="#" aria-current="page">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="">
          <img className="boy-img" src={boy} alt="boy" />
        </div>
        <div className="liquid-shape">
          <Blob />
        </div>
      </div>
    </header>
  );
};

export default Header;
