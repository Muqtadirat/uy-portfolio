import test1 from "./mechoE images/usability test1.png";
import test2 from "./mechoE images/usability test2.png";
import test3 from "./mechoE images/usability test3.png";
import test4 from "./mechoE images/usability test4.png";
import test5 from "./mechoE images/usability test 5.png";
import userInterview from "./mechoE images/userInterview.png";

function UsabilityImg({ imgSrc, height }) {
  const imgStyle = {
    width: "668px",
    height: `${height}`,
  };

  return (
    <div>
      <img src={imgSrc} alt="Usability test brief" style={imgStyle} />
    </div>
  );
}

function InterviewImg() {
  const imgStyle = {
    width: "813px",
    height: "821px",
  };

  return (
    <div>
      <img src={userInterview} alt="User interview" style={imgStyle} />
    </div>
  );
}

function UsabilityTest() {
  return (
    <div className="UsabilityTest">
      <div className="flex mb-[88px] text-left gap-[32px]">
        <h2 className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          Usability tests
        </h2>

        <div className="w-[668px]">
          <p>
            We carried out usability tests by creating a research protocol that
            aligned with the goals we had previously set out to achieve.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-wrap gap-8">
        <UsabilityImg imgSrc={test1} height="823px" />
        <UsabilityImg imgSrc={test2} height="823px" />
        <UsabilityImg imgSrc={test3} height="631px" />
        <UsabilityImg imgSrc={test4} height="631px" />
        <UsabilityImg imgSrc={test5} height="698px" />
      </div>
      {/*  */}

      <div className="flex my-[88px] text-left gap-[32px]">
        <h2 className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          User interviews
        </h2>

        <div className="w-[668px]">
          <p>
            User interviews were also carried out to get insights into the minds
            of our users so we could better understand their needs and purposes.
          </p>
        </div>
      </div>
      <InterviewImg />

      {/* Research result */}
      <div className="flex mt-[88px] text-left gap-[32px]">
        <h2 className="font-largescreen-largedisplay font-medium text-5xl w-[668px]">
          Research results
        </h2>

        <div className="w-[668px]">
          <p>(Documentation in-progress)</p>
        </div>
      </div>
    </div>
  );
}

export default UsabilityTest;
