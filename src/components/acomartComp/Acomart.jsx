import { Link } from "react-router-dom";
import backArrow from "./images/back-arrow.svg";
import outArrow from "./images/outward-arrow.svg"
import CaseStudy from "./CaseStudy";
import WireFrame from "./WireFrame";
import FinalProduct from "./FinalProduct";

function Acomart() {
  return (
    <div className="Acomart w-full md:max-w-full h-auto bg-base-colorssurface font-largescreen-body text-base md:text-lg text-white leading-[24px]">
      <button className="flex ml-6 md:ml-[72px] pt-10 md:pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px] text-base">
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>

      <CaseStudy />
      <WireFrame />
      <FinalProduct />

      <div className="md:w-[216px] py-8 md:pt-[90px] md:pb-[80px] mx-auto leading-[24px]">
        <p className=" text-base">Open Project</p>
        <p>
          <a
            href="http://www.myafrostream.tv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-xl md:text-2xl font-bold mt-[16px]"
          >
            www.myafrostream.tv
            <img src={outArrow} alt="Outward arrow" />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Acomart;
