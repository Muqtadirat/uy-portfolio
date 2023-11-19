import screen1 from "./mechoWeb images/new look1.png";
import screen2 from "./mechoWeb images/new look2.png";
import screen3 from "./mechoWeb images/new look3.png";
import screen4 from "./mechoWeb images/new look4.png";

function Screen({ imgSrc, height }) {
  const imgStyle = {
    width: "auto",
    height: `${height}`,
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
      <h2 className="mt-24 mx-[72px] text-left font-largescreen-largedisplay font-medium text-5xl">
        A fresh new look
      </h2>

      {/* Images */}

      <div className="grid col-span-3 gap-0">
        <Screen imgSrc={screen1} height="auto" className="" />
        <div className="grid col-span-2 ">
          <Screen
            imgSrc={screen2}
            height="auto"
            className=""
          />
          <Screen
            imgSrc={screen3}
            height="auto"
            className=""
          />
        </div>
        <Screen imgSrc={screen4} height="auto" className="" />
      </div>
    </div>
  );
}

export default NewLook;
