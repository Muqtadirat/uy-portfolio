import React from "react";
import { Link } from "react-router-dom";
// import "../style/card.css";
import Aufera from "../images/Aufera-card.png";
import MechoWeb from "../images/Mecho-card.png";
import Acomart from "../images/Acomart-card.png";
import Moovas from "../images/Moovas-card.png";
import MechoEnter from "../images/MechoEnterprise-card.png";

function LargeCard({ imgSrc, imgAlt }) {
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

function SmallCard({ imgSrc, imgAlt }) {
  const imgStyle = {
    width: "688px",
    height: "505px",
  };

  return (
    <div>
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </div>
  );
}

function Label({ text, field }) {
  return (
    <div className="label-wrapper bg-white text-left text-greyscale-10 px-10 py-6">
      <div className="label-text text-2xl font-bold">{text}</div>
      <div className=" mt-4 px-6 py-1 bg-base-colorsprimary-blue w-fit text-white rounded">
        <div>{field}</div>
      </div>
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
            <Link to="/auferaComp/aufera">
              <LabelledCard>
                <LargeCard imgSrc={Aufera} imgAlt="Aufera" />
                <Label text="Aufera (Case Study)" field="Travel" />
              </LabelledCard>
            </Link>

            <Link to="/mechoWebComp/mechoWebsite">
              <LabelledCard>
                <SmallCard imgSrc={MechoWeb} imgAlt="Mecho Website Redesign" />
                <Label
                  text="Mecho Website Redesign"
                  field="Automobile Services"
                />
              </LabelledCard>
            </Link>

            <Link to="/acomartComp/acomart">
              <LabelledCard>
                <SmallCard imgSrc={Acomart} imgAlt="Acomart" />
                <Label text="Acomart (Case Study)" field="Entertainment" />
              </LabelledCard>
            </Link>
          </div>

          <div className="flex-col inline-flex items-start relative flex-[0 0 auto] gap-[40px]">
            <Link to="/moovasComp/moovas">
              <LabelledCard>
                <SmallCard imgSrc={Moovas} imgAlt="Moovas" />
                <Label text="Moovas" field="Logistics" />
              </LabelledCard>
            </Link>

            <Link to="/parkstarComp/parkstar">
              <LabelledCard>
                <SmallCard imgSrc={Moovas} imgAlt="Parkstar" />
                <Label
                  text="Parkstart (Exploration)"
                  field="Recreational Services"
                />
              </LabelledCard>
            </Link>

            <Link to="/mechoEnterpriseComp/mechoEnterprise">
              <LabelledCard>
                <LargeCard imgSrc={MechoEnter} imgAlt="Mecho Enterprise" />
                <Label text="Mecho Enterprise Application" field="Saas" />
              </LabelledCard>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
