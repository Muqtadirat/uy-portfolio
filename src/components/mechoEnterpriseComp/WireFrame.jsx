import allRequest from "./mechoE images/All Requests.png";
import createReq1 from "./mechoE images/Create request 1.png";
import createReq2 from "./mechoE images/Create request 2.png";
import createReq3 from "./mechoE images/Create request 3.png";
import requestDetails from "./mechoE images/Request details.png";
import requestDetails1 from "./mechoE images/Request details1.png";
import reqCheckout from "./mechoE images/Request checkout.png";
import vehicleProfile from "./mechoE images/Vehicle profile.png";
import creditAccess from "./mechoE images/Credit access.png";

function WireframeImg({ imgSrc, height }) {
  const imgStyle = {
    width: "668px",
    height: `${height}`,
  };

  return (
    <div>
      <img src={imgSrc} alt="Wireframe" style={imgStyle} />
    </div>
  );
}

function WireFrame() {
  return (
    <div className="Wireframe mx-[72px]">
      <div className="flex my-[88px] text-left gap-[32px]">
        <h2 className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          Wireframes
        </h2>

        <div className="w-[668px]">
          <p>
            Wireframing the interface structure was done to ease communication
            with stakeholders and serve for proof of concept for A/B testing and
            desirability studies with users.
          </p>
          <p className=" mt-8">
            I have shown mid-high fidelity views of some of the screens below.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-wrap gap-6">
        <WireframeImg imgSrc={allRequest} height="521px" />
        <WireframeImg imgSrc={createReq1} height="409px" />
        <WireframeImg imgSrc={createReq2} height="409px" />
        <WireframeImg imgSrc={createReq3} height="409px" />
        <WireframeImg imgSrc={reqCheckout} height="409px" />
        <WireframeImg imgSrc={requestDetails} height="577px" />
        <WireframeImg imgSrc={requestDetails1} height="407px" />
        <WireframeImg imgSrc={vehicleProfile} height="498px" />
        <WireframeImg imgSrc={creditAccess} height="622px" />
      </div>
    </div>
  );
}

export default WireFrame;
