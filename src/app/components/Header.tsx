"use client";
import { AiOutlineSearch } from "react-icons/ai";
import chat from "../assets/chat.png";
import Image from "next/image";
import notification from "../assets/notification.png";
import user from "../assets/user.png";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex  justify-between items-center bg-white h-28 px-7 rounded-lg">
      <div className="relative text-gray-600">
        <input
          className="searchbar bg-white h-14 w-[476px] pl-12 rounded-full text-base text-[#3B3E44] focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button type="submit" className="absolute left-0 top-0 mt-4 ml-4">
          <AiOutlineSearch className="" size={30} color="#3B3E44" />
        </button>
      </div>
      <div>
        <div className="flex gap-x-6 items-center">
          <li className="relative list-none ">
            <Image src={chat} alt="chat" />
            <div className="absolute -top-2 -right-2 bg-[#72ADD7] text-white rounded-full w-5 h-5 text-center text-sm">
              4
            </div>
          </li>

          <li className="relative list-none ">
            <Image src={notification} alt="chat" />
            <div className="absolute -top-3 -right-2 bg-[#F8BB54] text-white rounded-full w-5 h-5 text-center text-sm">
              4
            </div>
          </li>
          <li className="relative list-none">
            <div className="flex items-center gap-2">
              <Image src={user} alt="chat" />
              <BsChevronDown
                onClick={handleToggle}
                className="cursor-pointer"
              />
            </div>
            {open && (
              <ul className="p-3 ml-10 absolute -right-3 top-14 bg-primary text-white rounded-lg">
                <li className="">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="mt-2">
                  <Link href="/">Logout</Link>
                </li>
              </ul>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
