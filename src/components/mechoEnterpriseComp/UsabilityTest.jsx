import test1 from "./mechoE images/usability test1.png";
import test2 from "./mechoE images/usability test2.png";
import test3 from "./mechoE images/usability test3.png";
import test4 from "./mechoE images/usability test4.png";
import test5 from "./mechoE images/usability test 5.png";
import userInterview from "./mechoE images/userInterview.png";
import { motion } from "framer-motion";

function UsabilityImg({ imgSrc, height }) {
  const imgStyle = {
    width: "668px",
    height: `${height}`,
    maxWidth: "none",
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
    maxWidth: "none"
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
      <div className="flex flex-col md:flex-row gap-2 md:gap-[32px] mb-6 md:mb-[88px] text-left ">
        <h2 className="text-2xl md:text-5xl font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          Usability tests
        </h2>

        <div className="md:w-[668px]">
          <p>
            We carried out usability tests by creating a research protocol that
            aligned with the goals we had previously set out to achieve.
          </p>
        </div>
      </div>

      {/* Images */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        className="overflow-x-auto"
      >
        <div className="flex flex-wrap gap-8">
          <UsabilityImg imgSrc={test1} height="823px" />
          <UsabilityImg imgSrc={test2} height="823px" />
          <UsabilityImg imgSrc={test3} height="631px" />
          <UsabilityImg imgSrc={test4} height="631px" />
          <UsabilityImg imgSrc={test5} height="698px" />
        </div>
      </motion.div>
      {/*  */}

      <div className="flex flex-col md:flex-row my-8 md:my-[88px] text-left gap-2 md:gap-[32px]">
        <h2 className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          User interviews
        </h2>

        <div className="md:w-[668px]">
          <p>
            User interviews were also carried out to get insights into the minds
            of our users so we could better understand their needs and purposes.
          </p>
        </div>
      </div>
      
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        className="overflow-x-auto"
      >
        <InterviewImg />
      </motion.div>

      {/* Research result */}
      <div className="flex flex-col md:flex-row mt-6 md:mt-[88px] text-left gap-[32px]">
        <h2 className="font-largescreen-largedisplay font-medium text-2xl md:text-5xl md:w-[668px]">
          Research results
        </h2>

        <div className="md:w-[668px]">
          <p>(Documentation in-progress)</p>
        </div>
      </div>
    </div>
  );
}

export default UsabilityTest;
