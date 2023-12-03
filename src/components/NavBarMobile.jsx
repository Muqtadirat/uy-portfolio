import { useState } from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

function NavBarMobile(params) {
  const [isOpen, setOpen] = useState(false);

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "rgba(25, 25, 25, 1)",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      height: "100%",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const NavItems = [
    {
      title: "",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Work",
      href: "./Projects.js",
    },
    {
      title: "Blog",
      href: "https://medium.com/@uthmanyussuff",
      newTab: true, //Sets property to open link in a new tab
    },
    {
      title: "Send me a mail",
      href: "#",
      isButton: true,
    },
  ];

  return (
    <div className="lg:hidden">
      <Menu right isOpen={isOpen} styles={styles}>
        <ul className="flex flex-col space-y-5">
          {NavItems.map((NavItem, index) => {
            const { title, href, newTab } = NavItem;

            return (
              <li
                key={index}
                className="flex flex-col text-greyscale-100 active:text-white rounded-lg border-[2px] p-3 border-y-stone-50"
              >
                <Link
                  to={href}
                  target={newTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className=" cursor-pointer "
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
    </div>
  );
}

export default NavBarMobile;
