import outArrow from "./images/outward-arrow.svg";
import acomartHeader from "./images/acomart-header.png";

function CaseStudy() {
  return (
    <div className="caseStudy mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-[80px] leading-[80px]">
        Afrostream (Case Study)
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="http://www.myafrostream.tv"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-[24px] font-bold"
        >
          www.myafrostream.tv <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-[120px] mb-[88px]">
        <img src={acomartHeader} alt="Aufera header" />
      </div>

      <div className="details text-[18px] w-[1368px]">
        <div className="overview flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          {/*  */}
          <div className="w-[668px] text-greyscale-90">
            <p>
              Afrostream is a movie and serie streaming service for afrocentric
              content. It is a mix of the traditional movie streaming experience
              and a digitization of the physical cinema experience including
              ticket purchase and limited movie playing periods.
            </p>
            <p className="mt-[2rem]">
              The product was built to serve across 3 different clients/device
              types: Smart TV, WebApplication and mobile application.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="userResearch flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="w-[668px] text-greyscale-90">
            <p>
              The interaction design strategy used for Afrostream was the
              rapid-expert (genius design) method.
            </p>
            <p className="mt-[2rem]">
              As such, only competitive research was done for this project
            </p>
          </div>
        </div>
        {/*  */}
        <div className="analysis flex gap-[32px] mb-[88px] text-left font-bold">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-[24px] w-[668px]">
            <p>Secondary Research/Competitive Analysis</p>
          </div>

          <div>
            <p className="mb-[16px] text-[24px]">Brands</p>

            <div className="inline-flex gap-[32px] items-start text-[16px]">
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                Netflix
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
               Hulu
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                IrokoTV
              </p>
              <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                AmazonPrime
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default CaseStudy;
