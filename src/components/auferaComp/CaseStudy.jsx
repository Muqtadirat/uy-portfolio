import outArrow from "./images/outward-arrow.svg";
import headerImg from "./images/aufera-header.png";

function CaseStudy() {
  return (
    <div className="caseStudy mx-[72px]">
      <h1 className="flex mt-[40px] font-black font-largescreen-largedisplay text-[80px]">
        Aufera (Case Study)
      </h1>
      <p className="flex mt-[16px]">
        <a
          href="http://www.aufera.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-[24px] font-bold"
        >
          www.aufera.com <img src={outArrow} alt="Outward arrow" />{" "}
        </a>
      </p>

      <div className="mt-[120px] mb-[88px]">
        <img src={headerImg} alt="Aufera header" />
      </div>

      <div className="details text-[18px] leading-[24px] w-[1368px]">
        <div className="overview flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] w-[668px] font-largescreen-largedisplay font-medium">
            <h2>Overview</h2>
          </div>
          <div className="w-[668px]">
            <p>
              Aufera is community based car rental app that allows people host
              or rent a vehicle to other users of the app using a peer-to-peer
              interaction model. The product was designed as a solution to
              increase access to car rental options in Lagos, Nigeria.
            </p>

            <p className="mt-[3rem]">
              My approach to the interaction design of this product was user
              centered design and this helped me focus on a 4-step cycle design
              process of user research, product definition, sketching &
              wireframing, prototyping and user testing.
            </p>
          </div>
        </div>

        <div className="userResearch flex gap-[32px] mb-[88px] text-left">
          <div className="text-[48px] leading-[48px] font-largescreen-largedisplay font-medium w-[668px]">
            <h2>User Research</h2>
          </div>

          <div className="w-[668px]">
            <ul>
              The product research for Aufera was conducted to
              <li className="list-disc mt-[2rem] ml-12">
                understand the two user groups that would be using this product
                (Renters & Hosts)
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                have a clear idea of the pain points experienced in accessing
                rental vehicles
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                {" "}
                understand what was currently being done and used in the
                industry and how well the available solutions fulfilled user
                needs.
              </li>
            </ul>

            <ul className="mt-[2rem]">
              While I would be discussing the basic research steps done, user
              research was done at various stages of design using the following
              qualitative methods.
              <li className="list-disc mt-[2rem] ml-12">A/B Testing </li>
              <li className="list-disc mt-[2rem] ml-12">
                Desirability studies
              </li>
              <li className="list-disc mt-[2rem] ml-12">
                Moderated usability tests
              </li>
            </ul>

            <p className="text-[12px] mt-[24px] ">
              * I am unable to currently share more insights into the research
              results because of non-disclosure and IP agreements
            </p>
          </div>
        </div>

        <div className="criteria flex gap-[32px] mb-[88px] text-left font-bold leading-[24px]">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-[24px] w-[668px]">
            <p>Recruitment Criteria</p>
          </div>

          <div className="wrapper w-[668px]">
            <div className="renter">
              <p className="mb-[16px]">Renters</p>
              <div className="inline-flex gap-[32px] items-start text-[16px] mb-[64px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Aged 18 - 58
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Has a valid driver's license
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Has a valid ID
                </p>
              </div>
            </div>

            <div className="host">
              <p className="mb-[16px]">Host</p>
              <div className="inline-flex gap-[32px] items-start text-[16px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Aged 18 - 58
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Own's at least one car
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="questions flex gap-[32px] mb-[96px] text-left font-bold leading-[24px]">
          <div className="font-largescreen-largedisplay text-greyscale-40 text-[24px] w-[668px]">
            <div>
              <p>Recruitment Questions</p>
            </div>
          </div>

          <div className="wrapper w-[668px]">
            <div className="renter">
              <div>
                <p className="mb-[16px]">Renters</p>
              </div>

              <div className="flex flex-col gap-[32px] items-start text-[16px] mb-[64px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  How do you move around Lagos?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  What do you love about moving around Lagos?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  What do you dislike about moving around Lagos?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  How would you prefer to move around?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  Have you ever rented a car, If yes how was your experience?
                </p>
              </div>
            </div>

            <div className="host">
              <div>
                <p className="mb-[16px]">Hosts</p>
              </div>

              <div className="flex flex-col gap-[32px] items-start text-[16px]">
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  How do you move around Lagos?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  If yes, how do you rent your car?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  What are your favorite things about renting your car out?
                </p>
                <p className="border rounded-[4px] px-[16px] py-[16px] border-greyscale-20">
                  What are your least favorite things about renting your car
                  out?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
