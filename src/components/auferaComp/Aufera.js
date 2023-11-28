import { Link } from "react-router-dom";
import backArrow from "./images/back-arrow.svg";
import outArrow from "./images/outward-arrow.svg"
import CaseStudy from "./CaseStudy";
import UserPersona from "./UserPersona";
import Wireframe from "./Wireframe";
import FinalProduct from "./FinalProduct";

function Aufera() {
  return (
    <div className="Aufera sm:max-w-sm md:max-w-full h-auto bg-base-colorssurface font-largescreen-body text-sm md:text-lg text-white">
      <button className="flex ml-6 md:ml-[72px] pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px] text-base">
          {" "}
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>
      <CaseStudy />
      <UserPersona />
      <Wireframe />
      <FinalProduct />
      <div className="w-[216px] pt-[90px] pb-[80px] mx-auto leading-[24px]">
        <p>Open Project</p>
        <p>
          <a
            href="http://www.aufera.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-[24px] font-bold mt-[16px]"
          >
            www.aufera.com <img src={outArrow} alt="Outward arrow" />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Aufera;
