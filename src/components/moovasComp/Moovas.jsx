import { Link } from "react-router-dom";
import backArrow from "./moovas images/back-arrow.svg";
import outArrow from "./moovas images/outward-arrow.svg";
import CaseStudy from "./CaseStudy";
import WireFrame from "./WireFrame";

function Moovas() {
  return (
    <div className="Moovas w-full md:max-w-full h-auto bg-base-colorssurface font-largescreen-body text-base md:text-lg text-white leading-[24px]">
      <button className="flex ml-6 md:ml-[72px] pt-10 md:pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px] text-base">
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>

      <CaseStudy />
      <WireFrame />

      <div className="md:w-[216px] pt-10 md:pt-[120px] pb-8 md:pb-[80px] mx-auto leading-[24px]">
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

export default Moovas;
