import { motion } from "framer-motion";
import onboard1 from "./images/onboarding-1.png";
import onboard2 from "./images/Onboarding-2.png";
import signUpPage from "./images/Sign-up.png";
import inbox1 from "./images/Inbox-1.png";
import inbox2 from "./images/Inbox-2.png";
import catalogueInfo from "./images/Catalogue-details.png";
import garage from "./images/Garage.png";
import calendar from "./images/Calendar.png";
import catalogue from "./images/Catalogue.png";
import walletImg from "./images/wallet.png";

function OnboardImg({ imgSrc, imgAlt }) {
  const imgStyle = {
    width: "236px",
    height: "509px",
  };

  return (
    <div>
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </div>
  );
}
function CatalogueImg({ imgSrc, imgAlt, height }) {
  const imgStyle = {
    width: "auto",
    // height: `${height}px`,
    height: "auto",
  };

  return (
    <div className="left-[-20px]">
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </div>
  );
}

function FinalProduct() {
  return (
    <div className="FinalProduct bg-greyscale-100 mt-6 md:mt-[96px] text-greyscale-10">
      <div className=" mx-6 md:mx-[72px] py-[33px] md:py-[80px] text-base md:text-lg">
        <h2 className="text-left font-medium text-2xl md:text-5xl font-largescreen-xlargedisplay leading-[48px]">
          Final Product
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-[103px]">
          <div className="w-[392px] text-left leading-[24px]">
            <p className="font-bold text-[24px] md:w-[233px] mb-1 md:mb-[16px]">
              Seamless, fast onboarding process
            </p>
            <p className="text-greyscale-40">
              Designed to onboard users with <br /> little to no friction
            </p>
          </div>
          <motion.div
            className="md:ml-[177px] flex gap-[32px]"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
          >
            <OnboardImg imgSrc={onboard1} imgAlt="Onboarding 1" />
            <OnboardImg imgSrc={onboard2} imgAlt="Onboarding 2" />
            <OnboardImg imgSrc={signUpPage} imgAlt="Sign up page" />
          </motion.div>
        </div>

        <div className="mt-[163px]">
          <div className="w-[392px] text-left mx-auto leading-[24px] ">
            <p className="font-bold text-[24px] mb-[16px] w-[317px]">
              Rent any car easily from a robust detailed catalogue
            </p>
            <p className="text-greyscale-40">
              With tools to tailor every rental to your needs and preferred
              taste
            </p>
          </div>

          <div className="flex">
            <CatalogueImg imgSrc={inbox1} imgAlt="Inbox" height={529} />
            <CatalogueImg imgSrc={catalogueInfo} imgAlt="Inbox" height={1044} />
            <div className="flex flex-col">
              <CatalogueImg imgSrc={catalogue} height={575} />
              <CatalogueImg imgSrc={inbox2} height={509} />
            </div>
            <CatalogueImg imgSrc={calendar} />
            <CatalogueImg imgSrc={garage} />
          </div>
        </div>

        <div className="flex flex-col pb-16 md:pb-20 md:flex-row justify-center mt-6 gap-[42px] md:gap-[16px]">
          <div className="md:w-[392px] text-left mx-auto leading-[24px] self-center">
            <p className="font-bold text-[24px] mb-[16px]">In-app wallet</p>
            <p className="text-greyscale-40">
              Manage your funds easily as a host and as a renter
            </p>
          </div>
          <div className=" mx-auto">
            <OnboardImg imgSrc={walletImg} imgAlt="Wallet feature" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalProduct;
