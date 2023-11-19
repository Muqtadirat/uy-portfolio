import outArrow from "./moovas images/outward-arrow.svg";
import moovasHeader from "./moovas images/moovas-header.png";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-[80px] leading-[80px]">
        Moovas (Now Dopasend)
      </h1>

      <p className="flex mt-[16px]">
        <a
          href="https://dopasend.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-[24px] font-bold"
        >
          https://dopasend.com
          <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      {/* Header image */}
      <div className="mt-[120px] mb-[88px]">
        <img src={moovasHeader} alt="Moovas header" />
      </div>

      {/* Text */}
      <div className="details text-[18px] w-full">
        <div className="overview flex gap-[32px] mb-[96px] text-left">
          <div className="text-[48px] leading-[48px] w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>

          <div className="w-[668px] text-greyscale-90">
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
