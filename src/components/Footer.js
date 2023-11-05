import logo from "../images/logo-black.png";
import twitterLogo from "../images/Twitter-logo.png";
import linkedinLogo from "../images/LinkedIn-logo.png";
import dribbleLogo from "../images/Dribble-logo.png";
import mediumLogo from "../images/Medium-logo.png";

function Footer() {
  const logoStyle = {
    width: "56.856px",
    height: "24px",
  };

  const socialLogo = {
    width: "40px",
    height: "40px",
  };

  return (
    <div className="Footer bg-base-colorssurface absolute w-full border-t">
      <div className="w-[1368px] flex justify-between mx-auto items-center py-5">
        <img src={logo} className="logo" alt="UY-logo" style={logoStyle} />
        <div className="socials flex gap-6 ">
          <div className="twitter">
            <a
              href="https://twitter.com/UthmanYussuff_O"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterLogo} alt="twitter" style={socialLogo} />
            </a>
          </div>

          <div className="linkedIn">
            <a
              href="https://www.linkedin.com/in/uthmanyussuff/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="twitter" style={socialLogo} />
            </a>
          </div>

          <div className="dribble">
            <a
              href="https://dribbble.com/UthmanYussuff"
              target="_blank"
              rel="noreferrer"
            >
              <img src={dribbleLogo} alt="twitter" style={socialLogo} />
            </a>
          </div>

          <div className="medium">
            <a
              href="https://medium.com/@uthmanyussuff"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mediumLogo} alt="twitter" style={socialLogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
