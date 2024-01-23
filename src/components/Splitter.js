import React from "react";
import { motion } from "framer-motion";

function Splitter() {
  return (
    // <div className="Splitter bg-base-colorssurface hidden md:block w-[714px] h-[270px]">
    <div className="Splitter hidden md:block">
      <div className="normalState">
        <div className="wrapper relative py-[320px] font-largescreen-heading text-greyscale-40">
          <div className="amazing hover:text-white">
            <h2 className=" font-largescreen-largedisplay text-[80px] font-black">
              How I<br />
              create amazing
              <br />
              products
            </h2>
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <div className="overlayText text-lg flex flex-col">
              <div
                className="textWrapper absolute ml-[465px] mt-[-323px] "
                style={{ transform: "rotate(-11.027deg)" }}
              >
                <p className="border rounded-[4px] w-fit px-10 py-4 bg-greyscale-20 border-greyscale-20">
                  User Research
                </p>
              </div>

              <div
                className="textWrapper absolute ml-[23rem] mt-[-6.25rem]"
                style={{ transform: "rotate(4.027deg)" }}
              >
                <p className="border rounded-[4px] w-fit px-10 py-4 bg-greyscale-20 border-greyscale-20">
                  Sketching & Wireframing
                </p>
              </div>

              <div
                className="textWrapper absolute ml-[52.8rem] mt-[-20.63rem]"
                style={{ transform: "rotate(4.696deg)" }}
              >
                <p className="border rounded-[4px] w-fit px-10 py-4 bg-greyscale-20 border-greyscale-20">
                  Product Definition
                </p>
              </div>

              <div
                className="textWrapper absolute ml-[61.38rem] mt-[-12.8rem]"
                style={{ transform: "rotate(4.395deg)" }}
              >
                <p className="border rounded-[4px] w-fit px-10 py-4 bg-greyscale-20 border-greyscale-20">
                  User Testing
                </p>
              </div>

              <div
                className="textWrapper absolute ml-[47rem] mt-[-4.36rem]"
                style={{ transform: "rotate(-5.868deg)" }}
              >
                <p className="border rounded-[4px] w-fit px-10 py-4 bg-greyscale-20 border-greyscale-20">
                  Developer Communication
                </p>
              </div>
              {/*  */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Splitter;
