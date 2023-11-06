import { Link } from "react-router-dom";
import backArrow from "./images/back-arrow.svg";
import CaseStudy from "./CaseStudy";
import UserPersona from "./UserPersona";

function Aufera() {
  return (
    <div className="Aufera w-full h-[17372px] bg-base-colorssurface font-largescreen-body text-white">
      <button className="flex ml-[72px] pt-[135px]">
        <Link to="/" className=" inline-flex gap-[4px]">
          {" "}
          <img src={backArrow} alt="Back arrow" /> Back{" "}
        </Link>
      </button>
      <CaseStudy />
      <UserPersona />
    </div>
  );
}

export default Aufera;
