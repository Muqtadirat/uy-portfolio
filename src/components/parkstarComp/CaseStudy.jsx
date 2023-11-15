import outArrow from "./parkstar images/outward-arrow.svg";
import parkstarHeader from "./parkstar images/parkstar-header.png";

function CaseStudy() {
  return (
    <div className="CaseStudy mx-[72px]">
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
        <img src={parkstarHeader} alt="Parkstar header" />
      </div>

      {/* Text */}
      <div className="details text-[18px] w-[1368px]">
        <div className="overview flex gap-[32px] mb-[96px] text-left">
          <div className="text-[48px] leading-[48px] w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>

          <div className="w-[668px] text-greyscale-90">
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
