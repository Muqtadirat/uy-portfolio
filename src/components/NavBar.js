import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../images/logo-black.png";
import NavBarDesk from "./NavBarDesk";
import NavBarMobile from "./NavBarMobile";

function NavBar() {
  const logoStyle = {
    width: "56.856px",
    height: "24px",
  };

  // const NavItems = [
  //   {
  //     title: "",
  //     href: "#",
  //   },
  //   {
  //     title: "About",
  //     href: "#",
  //   },
  //   {
  //     title: "Work",
  //     href: "#",
  //   },
  //   {
  //     title: "Blog",
  //     href: "https://medium.com/@uthmanyussuff",
  //   },
  //   {
  //     title: "Blog",
  //     href: "#",
  //   },
  // ];

  return (
    <nav className="NavBar fixed top-0 z-50 w-full">
      <div className="container flex justify-between items-center p-6 bg-greyscale-10 h-104">
        <Link to="/">
          <img
            src={logo}
            className="logo"
            alt="UY-logo"
            style={logoStyle}
          ></img>{" "}
        </Link>

        <NavBarDesk />
        <NavBarMobile />
      </div>
    </nav>
  );

  // useEffect(() => {
  //   const menuToggle = document.getElementById("menuToggle");
  //   menuToggle.addEventListener("click", function () {
  //     document.querySelector("ul").classList.toggle("hidden");
  //   });

  //   // Cleanup the event listener when component unmounts
  //   return () => {
  //     menuToggle.removeEventListener("click", function () {
  //       document.querySelector("ul").classList.toggle("hidden");
  //     });
  //   };
  // }, []);

  // return (
  //   <nav className="NavBar sticky top-0 z-50 w-full ">
  //     <div className=" container flex justify-between items-center p-6 bg-greyscale-10 h-104 ">
  //       <img src={logo} className="logo" alt="UY-logo" style={logoStyle}></img>
  //       <div className="wrapper items-center flex flex-row flex-wrap space-x-16">
  //         <div className=" flex">
  //           <button id="menuToggle" className="lg:hidden">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //             >
  //               <path
  //                 d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
  //                 fill="white"
  //               />
  //             </svg>
  //           </button>
  //           <ul className="hidden sm:flex lg:flex items-center space-x-12 lg:space-x-8">
  //             {" "}
  //             {/*!-- Hidden on smaller screens */}
  //             <li className="flex text-greyscale-40 active:text-white">
  //               About
  //             </li>
  //             <li className="flex text-greyscale-40 active:text-white">Work</li>
  //             <li className="flex text-greyscale-40 active:text-white">
  //               {" "}
  //               <a
  //                 href="https://medium.com/@uthmanyussuff"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 Blog
  //               </a>
  //             </li>
  //           </ul>
  //         </div>

  //         <button className=" text-white bg-base-colorsprimary-blue px-8 py-3 rounded lg:inline-block">
  //           {" "}
  //           <a
  //             href="mailto:uthmanyussuff@gmail.com"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Send me a mail
  //           </a>
  //         </button>
  //       </div>
  //     </div>
  //   </nav>
  // );
}

export default NavBar;
