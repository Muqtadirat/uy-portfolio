import outArrow from "./mechoE images/outward-arrow.svg";
import mechoEHeader from "./mechoE images/MechoEnterprise-header.png";
import mobileHeader from "./mechoE images/mobile header.png"
import UsabilityTest from "./UsabilityTest";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-6 md:mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-left text-4xl md:text-[80px] leading-10 md:leading-[80px]">
        Mecho enterprise application
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="https://business.mechoautotech.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xl md:text-2xl  font-bold"
        >
          business.mechoautotech.com <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-12 md:mt-[120px] mb-8 md:mb-[88px]">
        <img
          src={mechoEHeader}
          alt="Mecho enterprise header"
          className="hidden md:block"
        />
        <img
          src={mobileHeader}
          alt="Mecho enterprise header"
          className="md:hidden"
        />
      </div>

      <div className="details text-base md:text-lg md:max-w-full">
        <div className="overview flex flex-col md:flex-row gap-2 md:gap-[32px] mb-6 md:mb-[88px] text-left">
          <div className="text-2xl md:text-5xl leading-[48px] md:w-[668px]  font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          {/*  */}

          <div className="md:w-[668px] text-greyscale-90">
            <ul>
              Mecho enterprise application is a web-app designed to help
              customers of Mecho fulfill their automobile service needs from:
              <li className="list-disc mt-2 md:mt-[1rem] ml-6 md:ml-12">
                Vehicle service request creation and management
              </li>
              <li className="list-disc mt-2 md:mt-[1rem] ml-6 md:ml-12">
                Fleet repair data and Insights
              </li>
              <li className="list-disc mt-2 md:mt-[1rem] ml-6 md:ml-12">
                Fleet management
              </li>
            </ul>
          </div>
        </div>
        {/*  */}

        <div className="userResearch flex flex-col md:flex-row gap-2 md:gap-[32px] mb-6 md:mb-[88px] text-left">
          <div className="text-2xl md:text-5xl leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="md:w-[668px] text-greyscale-90">
            <ul>
              The product research for Mecho enterprise application was
              conducted to:
              <li className="list-disc mt-2 md:mt-[1rem] ml-6 md:ml-12">
                Get insight into how customers request services on the previous
                Mecho enterprise application
              </li>
              <li className="list-disc mt-2 md:mt-[1rem] ml-6 md:ml-12">
                understand how businesses currently manage their fleet as we had
                identified multiple bottlenecks in this feature in a previous
                research sprint.
              </li>
            </ul>

            <ul className="mt-10">
              User research was done at various stages of design using the
              following qualitative methods.
              <li className="list-disc mt-8 ml-6 md:ml-12">
                Moderated usability tests
              </li>
              <li className="list-disc mt-8 ml-6 md:ml-12">A/B Testing</li>
              <li className="list-disc mt-8 ml-6 md:ml-12">User interviews</li>
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <UsabilityTest />
    </div>
  );
}

export default CaseStudy;
