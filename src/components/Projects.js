import React from "react";
import { Link } from "react-router-dom";
// import "../style/card.css";
import Aufera from "../images/Aufera-card.png";
import MechoWeb from "../images/Mecho-card.png";
import Acomart from "../images/Acomart-card.png";
import Moovas from "../images/Moovas-card.png";
import MechoEnter from "../images/MechoEnterprise-card.png";

// function Label(text) {
//   return (
//     <div className="label-wrapper">
//       <div className="label-text">{text}</div>
//     </div>
//   );
// }

// function Card(title) {
//   return (
//     <div>
//       <div className="cards">
//         <div className="group">
//           <div className="overlap-group">
//             <div className="rectangle" />
//             <div className="frame">
//               <div className="div">{title}</div>
//               <Label className="label" divClassName="instance-node" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function LargeCard({ projectPage, imgSrc, imgAlt }) {
  const imgStyle = {
    width: "688px",
    height: "721px",
  };

  return (
    <div>
      <a href={projectPage}>
        <img src={imgSrc} alt={imgAlt} style={imgStyle} />
      </a>
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

function Projects() {
  return (
    <div className="Project">
      <div className="wrapper absolute top-[4622px] left-[72px]">
        <div className="top-0 left-0 text-[80px] lea font-black text-left font-largescreen-largedisplay text-greyscale-100">
          SEE MY
          <br />
          WORK
        </div>

        <div className="card-box inline-flex items-start absolute gap-[12px] top-[350px] left-0 bg-transparent w-[1368px]">
          <div className="flex-col inline-flex items-start relative flex-[0 0 auto] gap-[40px]">
            <Link to="/auferaComp/aufera">
              <LargeCard imgSrc={Aufera} imgAlt={"Aufera"} />
            </Link>

            <SmallCard imgSrc={MechoWeb} imgAlt={"Mecho Website Redesign"} />

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
