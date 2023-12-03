import loadingScreen from "./parkstar images/loader.png";
import loginScreen1 from "./parkstar images/Log in-1.png";
import loginScreen2 from "./parkstar images/Log in-2.png";
import loginScreen3 from "./parkstar images/Log in-3.png";
import mapScreen1 from "./parkstar images/map1.png";
import mapScreen2 from "./parkstar images/map2.png";
import mapScreen3 from "./parkstar images/map3.png";

function WireframeImg({ imgSrc }) {
  const imgStyle = {
    width: "317px",
    height: "686px",
    maxWidth: "none",
  };

  return (
    <div>
      <img src={imgSrc} alt="" style={imgStyle} />
    </div>
  );
}

function Wireframe() {
  return (
    <div className="Wireframe mx-10 md:mx-[72px]">
      <div className="text-left gap-[32px]">
        <div className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px]">
          Screens
        </div>
      </div>

      {/* Screen images */}
      <div className="frames mt-2 md:mt-[88px] flex flex-col ">
        <div className="flex flex-col md:flex-row gap-8 mb-[88px]">
          <WireframeImg imgSrc={loadingScreen} />
          <WireframeImg imgSrc={loginScreen1} />
          <WireframeImg imgSrc={loginScreen2} />
          <WireframeImg imgSrc={loginScreen3} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <WireframeImg imgSrc={mapScreen1} />
          <WireframeImg imgSrc={mapScreen2} />
          <WireframeImg imgSrc={mapScreen3} />
        </div>
      </div>
    </div>
  );
}

export default Wireframe;
