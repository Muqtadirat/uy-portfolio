import { Link } from "react-router-dom";

function NavBarDesk() {
 //List of navigation items to be mapped into the navBar

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
    <ul className="hidden lg:flex items-center justify-around space-x-12 lg:space-x-8">
      {NavItems.map((NavItem, index) => {
        const { title, href, newTab, isButton } = NavItem;

        if (isButton) {
          return (
            <li>
              <button className=" text-white bg-base-colorsprimary-blue px-8 py-3 rounded lg:inline-block">
                <a href="mailto:uthmanyussuff@gmail.com">{title}</a>
              </button>
            </li>
          );
        }

        return (
          <li key={index} className="flex text-greyscale-40 active:text-white">
            <Link
              to={href}
              target={newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarDesk;
