import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
const Sidebar = () => {
  const links = [
    {
      href: "#home",
      icon: "icon-home",
    },
    {
      href: "#about",
      icon: "icon-user-following",
    },
    {
      href: "#services",
      icon: "icon-briefcase",
    },
    {
      href: "#resume",
      icon: "icon-graduation",
    },
    {
      href: "#portfolio",
      icon: "icon-layers",
    },
    {
      href: "#blog",
      icon: "icon-note",
    },
    {
      href: "#contact",
      icon: "icon-bubble",
    },
  ];
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            {links.map((link, i) => (
              <li className="nav__item">
                <a href={link.href} className="nav__link">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <div className="copyright">&copy; 2022-2023</div>
      </div>
    </aside>
  );
};

export default Sidebar;
