import outArrow from "./parkstar images/outward-arrow.svg";
import parkstarHeader from "./parkstar images/parkstar-header.png";
import mobileHeader from "./parkstar images/mobile header.png";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-left text-4xl md:text-[80px] leading-10 md:eading-[80px]">
        Parkstar (Exploration)
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="https://www.figma.com/proto/Iu9l5LROfqAYzZ8PLiHBOT/Cloudfift-Test---Parkstar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl font-bold"
        >
          View prototype
          <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-12 md:mt-[120px] mb-8 md:mb-[88px]">
        <img
          src={parkstarHeader}
          alt="Parkstar header"
          className="hidden md:block"
        />
        <img src={mobileHeader} alt="Parkstar header" className="md:hidden" />
      </div>

      {/* Text */}
      <div className="details text-base md:text-lg md:max-w-full">
        <div className="overview flex flex-col md:flex-row gap-2 md:gap-[32px] mb-4 md:mb-[96px] text-left">
          <div className="text-2xl md:text-5xl  leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <p>
              Parkstar was an exploration of visual interaction to discover
              methods to improve feature accessibility and discoverability for
              users without creating confusion. It is important to mention that
              I found inspiration in the ux models used in Apple’s control
              center and Google maps features.
            </p>

            <ul className="mt-[2rem]">
              Parkstar is a parkfinder mobile application (fictional) that helps
              pet-owners
              <li className="list-disc mt-[1rem] ml-12">
                Find nearby pet friendly parks
              </li>
              <li className="list-disc mt-[1rem] ml-12">
                Get details about the parks such as open and closing time/status
              </li>
              <li className="list-disc mt-[1rem] ml-12">
                Seamless in-app navigation to parks
              </li>
              <li className="list-disc mt-[1rem] ml-12">
                {" "}
                Share locations with other pet-owners for companionship
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default CaseStudy;
