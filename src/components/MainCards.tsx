import Image from "next/image";
import React from "react";

import GymImage from "@/assets/GymImage.jpg";
import FronteirasImage from "@/assets/FronteirasImage.jpeg";
import GabsImage from "@/assets/GabsImage.jpeg";
import LofiImage from "@/assets/LofiImage.jpg";
import WaxImage from "@/assets/WaxImage.jpeg";
import YameImage from "@/assets/YameImage.jpg";
import JaoImage from "@/assets/JaoImage.jpeg";
import HungriaImage from "@/assets/HungriaImage.jpg";

export const MainCards = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 gap-y-2">
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image className="w-14 rounded-l-sm" src={GymImage} alt="singers" />
            <div>
              <span className="font-bold text-sm">GYM ROCK | WORKOUT 2024</span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image
              className="w-14 rounded-l-sm"
              src={FronteirasImage}
              alt="singers"
            />
            <div>
              <span className="font-bold text-sm">
                Estudante de Engenharia da Computacao...
              </span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image
              className="w-14 rounded-l-sm"
              src={GabsImage}
              alt="singers"
            />
            <div>
              <span className="font-bold text-sm">
                #39 A bolha de tecnologia agora e outra?...
              </span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image
              className="w-14 rounded-l-sm"
              src={LofiImage}
              alt="singers"
            />
            <div>
              <span className="font-bold text-sm">
                Lofi Hip Hop Radio: Beats to relax and study{" "}
              </span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image className="w-14 rounded-l-sm" src={WaxImage} alt="singers" />
            <div>
              <span className="font-bold text-sm">Wax</span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image
              className="w-14 rounded-l-sm"
              src={YameImage}
              alt="singers"
            />
            <div>
              <span className="font-bold text-sm">This is Yame</span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image className="w-14 rounded-l-sm" src={JaoImage} alt="singers" />
            <div>
              <span className="font-bold text-sm">Jao</span>
            </div>
          </li>
          <li className="flex items-center gap-3 h-14 bg-zinc-800 w-[400px] rounded-sm cursor-pointer">
            <Image
              className="w-14 rounded-l-sm"
              src={HungriaImage}
              alt="singers"
            />
            <div>
              <span className="font-bold text-sm">This is Hungria Hip Hop</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
