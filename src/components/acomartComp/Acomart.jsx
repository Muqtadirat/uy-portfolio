import { Link } from "react-router-dom"
import backArrow from "./images/back-arrow.svg"

function Acomart() {
    return (
      <div className="Acomart w-full h-[9674px] bg-base-colorssurface font-largescreen-body text-white">
        <button className="flex ml-[72px] pt-[135px]">
          <Link to="/" className=" inline-flex gap-[4px]">
            {" "}
            <img src={backArrow} alt="Back arrow" /> Back{" "}
          </Link>
        </button>
      </div>
    );
}

export default Acomart