import { Link } from "react-router-dom";
import backArrow from "./parkstar images/back-arrow.svg";
import outArrow from "./parkstar images/outward-arrow.svg";
import CaseStudy from "./CaseStudy";
import Wireframe from "./Wireframe";

function Parkstar() {
  return (
    <div className="Parkstar w-full h-full bg-base-colorssurface font-largescreen-body text-white leading-[24px]">
      <button className="flex ml-[72px] pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px]">
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>

      <CaseStudy />
      <Wireframe />

      <div className="w-[216px] pt-[120px] pb-[80px] mx-auto leading-[24px]">
        <p>Open Project</p>
        <p>
          <a
            href="https://www.figma.com/proto/Iu9l5LROfqAYzZ8PLiHBOT/Cloudfift-Test---Parkstar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-[24px] font-bold mt-[16px]"
          >
            View prototype <img src={outArrow} alt="Outward arrow" />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Parkstar;
