"use client";

import { useState } from "react";
import home from "../assets/home.png";
import reservation from "../assets/Group.png";
import trips from "../assets/trips.png";
import invoice from "../assets/invoice.png";
import planes from "../assets/planes.png";
import amenities from "../assets/amenities.png";
import contact from "../assets/contacts.png";
import teams from "../assets/teams.png";
import crewmember from "../assets/teams.png";
import files from "../assets/files.png";
import message from "../assets/messages.png";
import calender from "../assets/calender.png";
import settings from "../assets/setting.png";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const navLinks = [
    {
      path: "/",
      title: "Dashboard",
      icon: home,
    },
    {
      path: "/reservation",
      title: "Reservation",
      icon: reservation,
    },
    {
      path: "/",
      title: "Trips",
      icon: trips,
    },
    {
      path: "/invoice",
      title: "Invoice",
      icon: invoice,
    },
    {
      path: "/planes",
      title: "Planes",
      icon: planes,
      submenu: true,
      subMenuItems: [
        {
          path: "/",
          title: "submenu-1",
        },
        {
          path: "/",
          title: "submenu-1",
        },
      ],
    },
    {
      path: "/aminities",
      title: "Aminities",
      icon: amenities,
      submenu: true,
      subMenuItems: [
        {
          path: "/",
          title: "submenu-1",
        },
        {
          path: "/",
          title: "submenu-1",
        },
        {
          path: "/",
          title: "submenu-1",
        },
      ],
    },
    {
      path: "/contact",
      title: "Contact",
      icon: contact,
    },
    {
      path: "/team",
      title: "Team",
      icon: teams,
    },
    {
      path: "/crew-members",
      title: "Crew Members",
      icon: crewmember,
    },
    {
      path: "/files",
      title: "Messages",
      icon: message,
    },
    {
      path: "/calender",
      title: "Settings",
      icon: settings,
    },
  ];
  const [open, setOpne] = useState(true);
  const [subOpen, setSubOpne] = useState(false);
  const [submenuStates, setSubmenuStates] = useState(
    new Array(navLinks.length).fill(false)
  );
  const toggleSubmenu = (index: number) => {
    const updatedStates = [...submenuStates];
    updatedStates[index] = !updatedStates[index];
    setSubmenuStates(updatedStates);
  };
  const handleClick = () => {
    setOpne(!open);
  };

  return (
    <div
      className={`bg-primary p-5 pt-8 h-full ${
        open ? "w-[345px]" : "w-24"
      } rounded-[20px] relative duration-500`}>
      <div className={`text-center text-3xl font-bold ${!open && "scale-0"}`}>
        Logo
      </div>
      <BsArrowLeftShort
        onClick={handleClick}
        className={`bg-white rounded-full text-gray-300 text-3xl absolute -right-3 top-9 cursor-pointer ${
          !open && "rotate-180 duration-300"
        }`}
      />

      <ul className="pt-5">
        {navLinks.map((menu, index) => (
          <>
            <li
              key={index}
              className="text-gray-300 flex items-center gap-x-4 cursor-pointer p-4 hover:bg-[#accff1] hover:bg-opacity-[0.1] hover:rounded-xl mt-8">
              <Link href={menu.path}>
                {" "}
                <Image className="" src={menu.icon} alt="/" />{" "}
              </Link>
              <Link className={`${!open && "hidden"}`} href={menu.path}>
                {" "}
                {menu.title}{" "}
              </Link>
              {menu.submenu && open && (
                <BsChevronDown onClick={() => toggleSubmenu(index)} />
              )}
            </li>

            {menu.submenu && submenuStates[index] && open && (
              // Wrap submenu in a parent container
              <div>
                <ul>
                  {menu.subMenuItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center gap-x-2 cursor-pointer p-2 px-16 duration-300 ">
                      <Link href={subItem.path}> {subItem.title} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ))}
      </ul>
      <div className=" mt-10 ">
        <li className="flex items-center p-4 text-white gap-x-4 cursor-pointer">
          <FiLogOut size={30} />
          <span className={`${!open && "hidden"}`}>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
