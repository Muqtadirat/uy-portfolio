import { Link } from "react-router-dom";
import backArrow from "./images/back-arrow.svg";
import outArrow from "./images/outward-arrow.svg"
import CaseStudy from "./CaseStudy";
import WireFrame from "./WireFrame";
import FinalProduct from "./FinalProduct";

function Acomart() {
  return (
    <div className="Acomart sm:max-w-sm md:w-full h-auto bg-base-colorssurface font-largescreen-body text-sm md:text-lg text-white leading-[24px]">
      <button className="flex ml-6 md:ml-[72px] pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px] text-base">
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>

      <CaseStudy />
      <WireFrame />
      <FinalProduct />

      <div className="w-[216px] pt-[90px] pb-[80px] mx-auto leading-[24px]">
        <p>Open Project</p>
        <p>
          <a
            href="http://www.myafrostream.tv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-[24px] font-bold mt-[16px]"
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
