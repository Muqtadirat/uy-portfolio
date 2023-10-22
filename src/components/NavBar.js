import logo from "../images/logo-black.png";

function NavBar() {
  const logoStyle = {
    width: "56.856px",
    height: "24px",
  };

  return (
    <nav className="NavBar flex justify-between items-center p-6 bg-greyscale-10">
      <img src={logo} className="logo" alt="UY-logo" style={logoStyle}></img>
      <div className="wrapper items-center flex flex-row">
        <ul className="flex items-center space-x-12">
          <li className="flex text-greyscale-40 active:text-white">About</li>
          <li className="flex text-greyscale-40 active:text-white">Work</li>
          <li className="flex text-greyscale-40 active:text-white">
            {" "}
            <a
              href="https://medium.com/@uthmanyussuff"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="flex">
            <button className="text-white bg-base-colorsprimary-blue px-8 py-3 rounded">
              {" "}
              <a
                href="mailto:uthmanyussuff@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me a mail
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
