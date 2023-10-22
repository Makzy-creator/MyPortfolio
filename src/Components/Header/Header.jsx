import React from "react";
import FloatWriter from "./FloatWriter";
import "./Header.css";
import lady from "../../assets/img/fave.png";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import Blob from './Blob'

const Header = () => {
  return (
    <header id="" className="h-home flex">
      <div className="h-content">
        <h1 className="text-4xl font-bold">Hi! I'm Favour Maxwell</h1>
        <div className="flex">
          <h1 className="inline-flex [letter-spacing:2px] font-semibold text-2xl">
            And I'm a 
          </h1>
          <FloatWriter />
        </div>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat, itaque placeat dicta accusamus illum maxime voluptas illo
            nesciunt deleniti
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quaerat neque tempore libero deserunt quam accusantium eveniet ullam, atque eum sint sed et natus aspernatur! Cum ab provident ad nulla?
        </p>
        <div className="contact font-medium">
          <div className="email-info">
            <h5 className="text-white font-bold">Email:</h5>
            <span>makzymaxwell@gmail.com</span>
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
        <div className="socialIcons flex">
          <a href="#" aria-current="page">
            <FaLinkedin className="text-2xl"/>
          </a>
          <a href="#" aria-current="page">
            <FaWhatsapp className="text-2xl"/>
          </a>
          <a href="#" aria-current="page">
            <FaTwitter className="text-2xl"/>
          </a>
        </div>
      </div>
      <div className="h-image">
        <div className="img-box">
          <img src={lady} alt="lady" />
        </div>
        <div className="liquid-shape">
          <Blob />
        </div>
      </div>
    </header>
  );
};

export default Header;
