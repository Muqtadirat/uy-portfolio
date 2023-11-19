import { Link } from "react-router-dom";
import backArrow from "./mechoWeb images/back-arrow.svg"
import outArrow from "./mechoWeb images/outward-arrow.svg"
import CaseStudy from "./CaseStudy";
import OldLook from "./OldLook";
import NewLook from "./NewLook";


function MechoWebsite() {
    return (
      <div className="MechoWebsite w-full h-full bg-base-colorssurface font-largescreen-body text-white text-lg leading-[24px]">
        <button className="flex ml-[72px] pt-[135px] text-base">
          <Link to="/" className=" inline-flex gap-[4px]">
            <img src={backArrow} alt="Back arrow" /> Back{" "}
          </Link>
        </button>

        <CaseStudy />
        <OldLook />
        <NewLook />

        <div className="pb-[80px] mx-auto leading-[24px]">
          <p>Open Project</p>
          <p>
            <a
              href="http://www.mechoautotech.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-[24px] font-bold mt-[16px]"
            >
              www.mechoautotech.com
              <img src={outArrow} alt="Outward arrow" />{" "}
            </a>
          </p>
        </div>
      </div>
    );
}

export default MechoWebsite;