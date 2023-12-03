import mechoWebHeader from "./mechoWeb images/mechoWeb header.png";
import mobileHeader from "./mechoWeb images/mobile header.png"
import outArrow from "./mechoWeb images/outward-arrow.svg";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] text-left text-[40px] md:text-[80px] font-black font-largescreen-largedisplay leading-10 md:leading-[80px]">
        Mecho Website Redesign
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="http://www.mechoautotech.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl font-bold"
        >
          www.mechoautotech.com <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-12 md:mt-[120px] mb-8 md:mb-[88px]">
        <img src={mechoWebHeader} alt="Mecho website header" className="hidden md:block" />
        <img src={mobileHeader} alt="Mecho website header" className="md:hidden" />
      </div>

      {/* Text */}
      <div className="details text-base md:text-lg">
        <div className="overview flex flex-col md:flex-row gap-2 md:gap-[32px] mb-8 md:mb-[88px] text-left">
          <div className=" text-2xl md:text-5xl leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <p>
              Mecho Autotech LTD is a YCombinator backed automobile solution
              company primarily based in Lagos, Nigeria with a growing presence
              across 3 states in Nigeria and 2 countries in Africa as at 2022.{" "}
              <br />
              The company’s value propostion is increasing vehicle lifespan and
              function by providing on-demand repair and maintenance services
              that can be requested via the mobile application and website.
            </p>

            <p className="mt-8">
              Having had a recent brand identity makeover, it was necessary to
              follow through with a redesigh of the website to give a fresh,
              clean aesthetic that also helped tell the company’s values and
              purpose.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="aim flex flex-col md:flex-row gap-2 md:gap-[32px] mb-8 md:mb-[88px] text-left">
          <div className=" text-2xl md:text-5xl leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Aim & Outcomes</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <p>
              The redesign was expected to create a more user-friendly outlook
              for the company to increase app downloads and increase sales.
            </p>

            <ul className="mt-8">
              In March - August 2022, the redesign achieved
              <li className="list-disc mt-6 ml-12">
                conversion of 783 website visitors using the quick request
                feature on the website
              </li>
              <li className="list-disc mt-2 ml-12">
                Over 20,000 app downloads across IOS and Android devices, 13,057
                leads, 1,196 referrals.
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
