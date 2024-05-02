import Image from "next/image";
import React from "react";

import LikedImage from "@/assets/LikedImage.jpg";
import NeffexImage from "@/assets/NeffexImage.jpeg";
import GabsImage from "@/assets/GabsImage.jpeg";
import HungriaImage from "@/assets/HungriaImage.jpg";
import WaxImage from "@/assets/WaxImage.jpeg";
import FronteitasImage from "@/assets/FronteirasImage.jpeg";
import LofiImage from "@/assets/LofiImage.jpg";
import JaoImage from "@/assets/JaoImage.jpeg";
import GymImage from "@/assets/GymImage.jpg";
import YameImage from "@/assets/YameImage.jpg";
import FallImage from "@/assets/FallImage.jpeg";
import MaloneImage from "@/assets/MaloneImage.jpeg";

export const LibraryAside = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex gap-3 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={LikedImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Liked Songs</span>
            <span className="text-zinc-400 text-sm">Playlist . 8 songs</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={NeffexImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">NEFFEX</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={GabsImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Ola, Gabs</span>
            <span className="text-zinc-400 text-sm">
              Poscats . Gabs Ferreira
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image
            className="w-14 rounded-md"
            src={HungriaImage}
            alt="singer 1"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Hungria</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={WaxImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Wax</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image
            className="w-14 rounded-md"
            src={FronteitasImage}
            alt="singer 1"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Dev Sem Fronteiras</span>
            <span className="text-zinc-400 text-sm">Podcast . Alura</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={LofiImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Lofi Girls</span>
            <span className="text-zinc-400 text-sm">Playlist . 33 songs</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={JaoImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Jao</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={GymImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">
              GYM ROCK | WORKOUT 2024
            </span>
            <span className="text-zinc-400 text-sm">Playlist . 45 songs</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={YameImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Yame</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={FallImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Fall Out Boy</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center cursor-pointer">
          <Image className="w-14 rounded-md" src={MaloneImage} alt="singer 1" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Post Malone</span>
            <span className="text-zinc-400 text-sm">Artist</span>
          </div>
        </div>
      </div>
    </>
  );
};
