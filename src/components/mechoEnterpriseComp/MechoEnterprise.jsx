import { Link } from "react-router-dom";
import backArrow from "./mechoE images/back-arrow.svg";
import outArrow from "./mechoE images/outward-arrow.svg";
import CaseStudy from "./CaseStudy";
import WireFrame from "./WireFrame";
import Product from "./Product";

function MechoEnterprise() {
    return (
      <div className="MechoEnterprise w-full md:max-w-full h-auto bg-base-colorssurface font-largescreen-body text-white text-base md:text-lg leading-[24px]">
        <button className="flex ml-6 md:ml-[72px] pt-10 md:pt-[135px] text-base">
          <Link to="/" className=" inline-flex gap-[4px]">
            <img src={backArrow} alt="Back arrow" /> Back{" "}
          </Link>
        </button>

        <CaseStudy />
        <WireFrame />
        <Product />

        <div className=" mt-16 md:mt-[300px] pb-8 md:pb-[80px] mx-auto leading-[24px]">
          <p>Open Project</p>
          <p>
            <a
              href="https://business.mechoautotech.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-xl md:text-2xl font-bold mt-[16px]"
            >
              business.mechoautotech.com
              <img src={outArrow} alt="Outward arrow" />{" "}
            </a>
          </p>
        </div>
      </div>
    );
}

export default MechoEnterprise;