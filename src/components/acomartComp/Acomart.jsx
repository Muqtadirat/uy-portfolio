import { Link } from "react-router-dom";
import backArrow from "./images/back-arrow.svg";
import CaseStudy from "./CaseStudy";
import WireFrame from "./WireFrame";

function Acomart() {
  return (
    <div className="Acomart w-full h-[9674px] bg-base-colorssurface font-largescreen-body text-white leading-[24px]">
      <button className="flex ml-[72px] pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px]">
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>

      <CaseStudy />
      <WireFrame />
    </div>
  );
}

export default Acomart;
