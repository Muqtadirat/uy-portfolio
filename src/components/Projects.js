import React from "react";
import { Link } from "react-router-dom";
// import "../style/card.css";
import Aufera from "../images/Aufera-card.png";
import MechoWeb from "../images/Mecho-card.png";
import Acomart from "../images/Acomart-card.png";
import Moovas from "../images/Moovas-card.png";
import MechoEnter from "../images/MechoEnterprise-card.png";

function LargeCard({ projectPage, imgSrc, imgAlt }) {
  const imgStyle = {
    width: "688px",
    height: "721px",
  };

  return (
    <div>
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </div>
  );
}

function SmallCard({ projectPage, imgSrc, imgAlt }) {
  const imgStyle = {
    width: "688px",
    height: "505px",
  };

  return (
    <div>
      <a href={projectPage}>
        <img src={imgSrc} alt={imgAlt} style={imgStyle} />
      </a>
    </div>
  );
}

function Label({ text }) {
  return (
    <div className="label-wrapper overflow-hidden transition-all">
      <div className="label-text">{text}</div>
    </div>
  );
}

function LabelledCard({ children }) {
  return <div className="card-container relative">{children}</div>;
}

function Projects() {
  return (
    <div className="Project w-full md:max-w-full h-full bg-base-colorssurface font-largescreen-body text-base md:text-lg text-white leading-[24px]">
      <div className="wrapper mx-6 md:mx-[72px] pt-14 md:pt-[8rem]">
        <div className="text-left text-5xl md:text-[5rem] mb-6 md:mb-[4.5rem] leading-10 md:leading-[5rem] font-black font-largescreen-largedisplay text-greyscale-100">
          SEE MY
          <br />
          WORK
        </div>

        <div className="card-box inline-flex items-start gap-8">
          <div className="flex-col inline-flex items-start relative flex-[0 0 auto] gap-10">
            {/* <Link to="/auferaComp/aufera">
              <LargeCard imgSrc={Aufera} imgAlt={"Aufera"} />
            </Link> */}

            <Link to="/auferaComp/aufera">
              <LabelledCard>
                <LargeCard imgSrc={Aufera} imgAlt="Aufera" />
                <Label text="Aufera Case Study " />
              </LabelledCard>
            </Link>

            <Link to="/mechoWebComp/mechoWebsite">
              <SmallCard imgSrc={MechoWeb} imgAlt={"Mecho Website Redesign"} />
            </Link>

            <Link to="/acomartComp/acomart">
              <SmallCard imgSrc={Acomart} imgAlt={"Acomart"} />
            </Link>
          </div>

          <div className="flex-col inline-flex items-start relative flex-[0 0 auto] gap-[40px]">
            <Link to="/moovasComp/moovas">
              <SmallCard imgSrc={Moovas} imgAlt={"Moovas"} />
            </Link>

            <Link to="/parkstarComp/parkstar">
              <SmallCard imgSrc={Moovas} imgAlt={"Parkstar"} />
            </Link>

            <Link to="/mechoEnterpriseComp/mechoEnterprise">
              <LargeCard imgSrc={MechoEnter} imgAlt={"Mecho Enterprise"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
