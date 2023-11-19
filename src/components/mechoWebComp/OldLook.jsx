import screen1 from "./mechoWeb images/old look1.png";
import screen2 from "./mechoWeb images/old look2.png";
import screen3 from "./mechoWeb images/old look3.png";
import screen4 from "./mechoWeb images/old look4.png";

function Screen({ imgSrc }) {
  const imgStyle = {
    width: "668px",
    height: "1868px",
  };

  return (
    <div>
      <img src={imgSrc} alt="Old website look" style={imgStyle} />
    </div>
  );
}

function OldLook() {
  return (
    <div className="OldLook mx-[72px]">
      <h2 className="mt-24 text-left font-largescreen-largedisplay font-medium text-5xl">
        Old Look
      </h2>

      {/* images */}
          <div className="flex flex-wrap gap-x-8 gap-y-32 mt-24">
              <Screen imgSrc={screen1} />
              <Screen imgSrc={screen2} />
              <Screen imgSrc={screen3} />
              <Screen imgSrc={screen4} />
      </div>
    </div>
  );
}

export default OldLook;
