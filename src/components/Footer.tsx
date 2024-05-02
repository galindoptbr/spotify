import Image from "next/image";
import React from "react";

import { CiCirclePlus } from "react-icons/ci";
import { IoShuffleOutline, IoVolumeLowOutline } from "react-icons/io5";
import {
  IoIosSkipBackward,
  IoIosSkipForward,
  IoMdPause,
  IoMdRepeat,
} from "react-icons/io";

import { BsFilePlay } from "react-icons/bs";
import { PiMicrophoneStageDuotone, PiDevices } from "react-icons/pi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdScreenshotMonitor, MdCloseFullscreen } from "react-icons/md";

import FallImage from "@/assets/FallImage.jpeg";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Image
            className="w-14 rounded-md"
            src={FallImage}
            alt="fall out boy image"
          />
          <div className="flex flex-col">
            <span className="font-semibold">Sugar, We're Goin Down</span>
            <span className="text-sm text-zinc-400">Fall Out Boy</span>
          </div>
          <CiCirclePlus className="text-zinc-400 cursor-pointer" size={25} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-5 pb-2">
            <IoShuffleOutline
              className="text-zinc-400 cursor-pointer"
              size={25}
            />
            <IoIosSkipBackward
              className="text-zinc-400 cursor-pointer"
              size={25}
            />
            <IoMdPause
              className="bg-zinc-100 rounded-full text-zinc-900 pl-1 pr-1 cursor-pointer"
              size={35}
            />
            <IoIosSkipForward
              className="text-zinc-400 cursor-pointer"
              size={25}
            />
            <IoMdRepeat className="text-zinc-400 cursor-pointer" size={20} />
          </div>
          <div className="flex gap-2">
            <span className="text-sm text-zinc-400">2:23</span>
            <div className="w-[400px] h-1 bg-zinc-600 rounded-md relative mt-2">
              <div className="w-[50%] h-[100%] bg-zinc-300 rounded-md"></div>
            </div>
            <span className="text-sm text-zinc-400">3:49</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <BsFilePlay className="text-zinc-400 cursor-pointer" size={20} />
          <PiMicrophoneStageDuotone
            className="text-zinc-400 cursor-pointer"
            size={20}
          />
          <HiOutlineQueueList
            className="text-zinc-400 cursor-pointer"
            size={20}
          />
          <IoVolumeLowOutline
            className="text-zinc-400 cursor-pointer"
            size={20}
          />
          <div className="w-[100px] h-1 bg-zinc-600 rounded-md relative mt-3 mb-3">
            <div className="w-[100%] h-[100%] bg-zinc-100 rounded-md cursor-pointer"></div>
          </div>
          <MdScreenshotMonitor
            className="text-zinc-400 cursor-pointer"
            size={20}
          />
          <MdCloseFullscreen
            className="text-zinc-400 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </>
  );
};
