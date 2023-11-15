import signUpScreen from "./moovas images/signUp.png";
import createAccount from "./moovas images/create-account.png";
import otpEntry from "./moovas images/OTP entry.png";
import otpVerified from "./moovas images/OTP verified.png";
import shipmentHistory from "./moovas images/shipment-history.png";
import shipmentTracker from "./moovas images/track-shipment.png";
import newRequest from "./moovas images/new-request.png";
import checkout from "./moovas images/checkout.png";
import notifications from "./moovas images/notifications.png";
import wallet from "./moovas images/wallet page.png";
import profilePage from "./moovas images/profile.png";

function WireframeImg({ imgSrc }) {
  const imgStyle = {
    width: "317px",
    height: "686px",
  };

  return (
    <div>
      <img src={imgSrc} alt="" style={imgStyle} />
    </div>
  );
}

function WireFrame() {
  return (
    <div className="WireFrame mx-[72px]">
      <div className="text-left gap-[32px]">
        <div className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px]">
          Screens
        </div>
      </div>

      {/* Screen images */}
      <div className="frames mt-[88px] flex flex-col">
        <div className="flex gap-8 mb-[88px]">
          <WireframeImg imgSrc={signUpScreen} />
          <WireframeImg imgSrc={createAccount} />
          <WireframeImg imgSrc={otpVerified} />
          <WireframeImg imgSrc={otpEntry} />
        </div>

        <div className="flex gap-8 mb-[88px]">
          <WireframeImg imgSrc={shipmentHistory} />
          <WireframeImg imgSrc={shipmentTracker} />
          <WireframeImg imgSrc={newRequest} />
          <WireframeImg imgSrc={checkout} />
        </div>

        <div className="flex gap-8 mb-[88px]">
          <WireframeImg imgSrc={notifications} />
          <WireframeImg imgSrc={wallet} />
          <WireframeImg imgSrc={profilePage} />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default WireFrame;
