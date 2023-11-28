import { motion } from "framer-motion";
import chart from "./images/chart.png";

function Chart() {
  return (
    <motion.div
      className="Chart w-[1023px] md:w-auto"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -50, opacity: 0 }}
    >
      <img src={chart} alt="Organizational chart" />
    </motion.div>
  );
}

// Should it be hardcoded ?

export default Chart;
