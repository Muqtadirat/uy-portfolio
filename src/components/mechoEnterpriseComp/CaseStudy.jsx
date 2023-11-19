import outArrow from "./mechoE images/outward-arrow.svg";
import mechoEHeader from "./mechoE images/MechoEnterprise-header.png";
import UsabilityTest from "./UsabilityTest";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-[80px] leading-[80px]">
        Mecho enterprise application
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="https://business.mechoautotech.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-[24px] font-bold"
        >
          business.mechoautotech.com <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-[120px] mb-[88px]">
        <img src={mechoEHeader} alt="Mecho enterprise header" />
      </div>

      <div className="details text-[18px] w-[1368px]">
        <div className="overview flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          {/*  */}

          <div className="w-[668px] text-greyscale-90">
            <ul>
              Mecho enterprise application is a web-app designed to help
              customers of Mecho fulfill their automobile service needs from:
              <li className="list-disc mt-[1rem] ml-12">
                Vehicle service request creation and management
              </li>
              <li className="list-disc mt-[1rem] ml-12">
                Fleet repair data and Insights
              </li>
              <li className="list-disc mt-[1rem] ml-12">Fleet management</li>
            </ul>
          </div>
        </div>
        {/*  */}

        <div className="userResearch flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="w-[668px] text-greyscale-90">
            <ul>
              The product research for Mecho enterprise application was
              conducted to:
              <li className="list-disc mt-[1rem] ml-12">
                Get insight into how customers request services on the previous
                Mecho enterprise application
              </li>
              <li className="list-disc mt-[1rem] ml-12">
                understand how businesses currently manage their fleet as we had
                identified multiple bottlenecks in this feature in a previous
                research sprint.
              </li>
            </ul>

            <ul className="mt-10">
              User research was done at various stages of design using the
              following qualitative methods.
              <li className="list-disc mt-8 ml-12">
                Moderated usability tests
              </li>
              <li className="list-disc mt-8 ml-12">A/B Testing</li>
              <li className="list-disc mt-8 ml-12">User interviews</li>
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
