import screen1 from "./mechoWeb images/old look1.png";
import screen2 from "./mechoWeb images/old look2.png";
import screen3 from "./mechoWeb images/old look3.png";
import screen4 from "./mechoWeb images/old look4.png";
import { motion } from "framer-motion";

function Screen({ imgSrc }) {
  const imgStyle = {
    width: "668px",
    height: "1868px",
    maxWidth: "none",
  };

  return (
    <div>
      <img src={imgSrc} alt="Old website look" style={imgStyle} />
    </div>
  );
}

function OldLook() {
  return (
    <div className="OldLook mx-6 md:mx-[72px]">
      <h2 className=" mt-8 md:mt-24 text-left font-largescreen-largedisplay font-medium text-2xl md:text-5xl">
        Old Look
      </h2>

      {/* images */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        className="overflow-x-auto"
      >
        <div className="flex md:flex-wrap gap-x-8 gap-y-6 md:gap-y-32 mt-4 md:mt-24">
          <Screen imgSrc={screen1} />
          <Screen imgSrc={screen2} />
          <Screen imgSrc={screen3} />
          <Screen imgSrc={screen4} />
        </div>
      </motion.div>
    </div>
  );
}

export default OldLook;
