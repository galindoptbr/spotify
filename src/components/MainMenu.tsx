import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline, IoPeopleOutline } from "react-icons/io5";

import { HiOutlineUserCircle } from "react-icons/hi";

export const MainMenu = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <IoIosArrowBack
            size={30}
            className="bg-zinc-800 rounded-full text-zinc-400 p-1 cursor-pointer"
          />
          <IoIosArrowForward
            size={30}
            className="bg-zinc-800 rounded-full text-zinc-400 p-1 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="cursor-pointer">
              <span className="bg-zinc-100 pl-3 pr-3 p-1 text-sm rounded-full text-zinc-800 font-bold">
                Explore Premium
              </span>
            </li>
            <li className="cursor-pointer">
              <IoNotificationsOutline
                size={30}
                className="bg-zinc-800 rounded-full text-zinc-400 p-1"
              />
            </li>
            <li className="cursor-pointer">
              <IoPeopleOutline
                size={30}
                className="bg-zinc-800 rounded-full text-zinc-400 p-1"
              />
            </li>
            <li className="cursor-pointer">
              <HiOutlineUserCircle
                size={30}
                className="bg-zinc-800 rounded-full text-zinc-400 p-1"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
