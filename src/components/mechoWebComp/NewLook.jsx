import screen1 from "./mechoWeb images/new look1.png";
import screen2 from "./mechoWeb images/new look2.png";
import screen3 from "./mechoWeb images/new look3.png";
import screen4 from "./mechoWeb images/new look4.png";

import mobile1 from "./mechoWeb images/new look1 mobile.png";
import mobile2 from "./mechoWeb images/new look2 mobile.png";
import mobile3 from "./mechoWeb images/new look3 mobile.png";
import mobile4 from "./mechoWeb images/new look4 mobile.png";
import { motion } from "framer-motion";

function Screen({ imgSrc, height }) {
  const imgStyle = {
    width: "auto",
    height: `${height}`,
    maxWidth: "none",
  };

  return (
    <div>
      <img src={imgSrc} alt="New website look" style={imgStyle} />
    </div>
  );
}

function NewLook() {
  return (
    <div className="NewLook ">
      <h2 className="mt-8 md:mt-24 mx-6 md:mx-[72px] text-left font-largescreen-largedisplay font-medium text-2xl md:text-5xl">
        A fresh new look
      </h2>

      {/* Images */}

      <div className="hidden md:grid col-span-3 gap-0">
        <Screen imgSrc={screen1} height="auto" className="" />
        <div className="grid col-span-2 ">
          <Screen imgSrc={screen2} height="auto" className="" />
          <Screen imgSrc={screen3} height="auto" className="" />
        </div>
        <Screen imgSrc={screen4} height="auto" className="" />
      </div>

      {/* Images mobile */}
      <motion.div
        className="flex md:hidden mx-6 mt-4 overflow-x-auto gap-x-10"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
      >
        <div className="flex flex-col gap-8">
          <Screen imgSrc={mobile1} height="auto" />
          <Screen imgSrc={mobile3} height="auto" />
        </div>

        <div className="flex flex-col gap-8">
          <Screen imgSrc={mobile3} height="auto" />
          <Screen imgSrc={mobile3} height="auto" />
        </div>
      </motion.div>
    </div>
  );
}

export default NewLook;
