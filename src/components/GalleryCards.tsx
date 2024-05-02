import Image from "next/image";
import React from "react";

import WtfImage from "@/assets/WtfImage.png";
import StuffImage from "@/assets/StuffImage.jpg";
import InvisibleImage from "@/assets/InvisibleImage.png";
import LofiImage from "@/assets/LofiImage.jpg";
import GabsImage from "@/assets/GabsImage.jpeg";
import GymImage from "@/assets/GymImage.jpg";
import FronteirasImage from "@/assets/FronteirasImage.jpeg";

export const GalleryCards = () => {
  return (
    <>
      <div className="mt-3">
        <div className="flex justify-between">
          <span className="text-2xl font-bold cursor-pointer">
            New Episodes
          </span>
          <span className="font-semibold text-zinc-400 cursor-pointer">
            Show all
          </span>
        </div>
        <div className="flex gap-8">
          <div className="mt-3 cursor-pointer">
            <Image className="rounded-lg w-44" src={WtfImage} alt="wtf image" />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Episode 1535-...</span>
              <span className="text-zinc-400">May 2 . 95 min</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={StuffImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">What was Operati...</span>
              <span className="text-zinc-400">May 1 . 66 min</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={InvisibleImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">580 - Mr Yuk</span>
              <span className="text-zinc-400">Apr 20 . 57 min</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={StuffImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">CLASSIC: What th...</span>
              <span className="text-zinc-400">Apr 30 . 47 min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 cursor-pointer">
        <div className="flex justify-between">
          <span className="text-2xl font-bold cursor-pointer">
            Recently played
          </span>
          <span className="font-semibold text-zinc-400 cursor-pointer">
            Show all
          </span>
        </div>
        <div className="flex gap-8">
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={LofiImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Lofi Hip Hop Radio-...</span>
              <span className="text-zinc-400">Lofi Fruits Music, Chill</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={GabsImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Ola, Gabs</span>
              <span className="text-zinc-400">Gabs Ferreira</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image className="rounded-lg w-44" src={GymImage} alt="wtf image" />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">GYM ROCK |...</span>
              <span className="text-zinc-400">Rock to train like...</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer">
            <Image
              className="rounded-lg w-44"
              src={FronteirasImage}
              alt="wtf image"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Dev Sem Fronteiras</span>
              <span className="text-zinc-400">Alura</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
