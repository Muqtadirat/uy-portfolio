import outArrow from "./moovas images/outward-arrow.svg";
import moovasHeader from "./moovas images/moovas-header.png";
import mobileHeader from "./moovas images/mobile header.png"

function CaseStudy() {
  return (
    <div className="CaseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-left text-4xl md:text-[80px] leading-10 md:eading-[80px]">
        Moovas (Now Dopasend)
      </h1>

      <p className="flex mt-[16px]">
        <a
          href="https://dopasend.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl font-bold"
        >
          https://dopasend.com
          <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      {/* Header image */}
      <div className="mt-12 md:mt-[120px] mb-8 md:mb-[88px]">
        <img
          src={moovasHeader}
          alt="Moovas header"
          className="hidden md:block"
        />
        <img src={mobileHeader} alt="Moovas header" className="md:hidden" />
      </div>

      {/* Text */}
      <div className="details text-base md:text-lg md:max-w-full">
        <div className="overview flex flex-col md:flex-row gap-2 md:gap-[32px] mb-4 md:mb-[96px]  text-left">
          <div className="text-2xl md:text-5xl leading-[48px] md:w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <p>
              Moovas is a logistics company that wants to make delivery and
              pickup services easier and quicker for customers.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default CaseStudy;
