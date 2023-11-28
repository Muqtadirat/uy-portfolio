import { motion } from "framer-motion";
import frame from "./images/frames.png"

function Frames() {
  return (
    <div className="Frames">
      <div className="flex flex-col md:flex-row pt-6 md:pt-[88px] pb-6 md:pb-[96px] text-left gap-2 md:gap-[32px]">
        <p className="text-greyscale-40 md:w-[668px] font-bold text-xl md:text-2xl font-largescreen-caption leading-[24px]">
          Wireframes
        </p>
        <div className="text-wrapper md:w-[668px] text-base md:text-lg leading-[24px]">
          <p>
            Wireframing the interface structure was done to ease communication
            with stakeholders and serve for proof of concept for A/B testing and
            desirability studies with users.
          </p>{" "}
          <br />
          <p>
            I have shown mid-high fidelity views of some of the screens below.
          </p>
        </div>
      </div>

      <motion.div
        className="w-[706px] md:w-auto"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
      >
        <img src={frame} alt="Wireframes" />
      </motion.div>
    </div>
  );
}

export default Frames;
