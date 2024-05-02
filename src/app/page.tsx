import Image from "next/image";

import BannerMain from "@/assets/bannerMain.png";

import { VscLibrary } from "react-icons/vsc";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import { GoHomeFill, GoSearch } from "react-icons/go";

import { LibraryAside } from "@/components/LibraryAside";
import { MenuCategories } from "@/components/MenuCategories";
import { MainMenu } from "@/components/MainMenu";
import { MainCards } from "@/components/MainCards";
import { GalleryCards } from "@/components/GalleryCards";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="grid-rows-2">
          <div>
            <aside className="w-96 bg-zinc-900 m-3 p-5 rounded-md">
              <ul>
                <li className="flex gap-3 items-center pb-5 cursor-pointer">
                  <GoHomeFill className="text-zinc-400" size={30} />
                  <p className="font-bold text-zinc-400 mr-14">Home</p>
                </li>
                <li className="flex gap-3 items-center cursor-pointer">
                  <GoSearch className="text-zinc-400" size={30} />
                  <p className="font-bold text-zinc-400 mr-14">Search</p>
                </li>
              </ul>
            </aside>
          </div>
          <aside className="w-96 h-[1020px] bg-zinc-900 m-3 p-5 rounded-md">
            <div className="flex gap-3 items-center">
              <VscLibrary className="text-zinc-400" size={30} />
              <p className="font-bold text-zinc-400 mr-14">Your Library</p>
              <div className="flex gap-3 ml-20 text-zinc-400">
                <FaPlus size={20} />
                <FaArrowRight size={20} />
              </div>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <MenuCategories name="Playlists" />
                </li>
                <li>
                  <MenuCategories name="PodCasts & Shows" />
                </li>
                <li>
                  <MenuCategories name="Albums" />
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <LibraryAside />
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <main className="flex-1 mt-3 mb-3 mr-3 p-5 bg-zinc-900 rounded-md">
          <div>
            <MainMenu />
            <Image
              src={BannerMain}
              alt="banner main"
              className="mt-3 rounded-sm"
            />
          </div>
          <div>
            <ul className="flex mt-5 gap-3">
              <li className="cursor-pointer">
                <span className="bg-zinc-100 text-zinc-800 rounded-full pl-3 pr-3 p-1 font-semibold">
                  All
                </span>
              </li>
              <li className="cursor-pointer">
                <span className="text-zinc-100 bg-zinc-800 rounded-full pl-3 pr-3 p-1 font-semibold">
                  Music
                </span>
              </li>
              <li className="cursor-pointer">
                <span className="text-zinc-100 bg-zinc-800 rounded-full pl-3 pr-3 p-1 font-semibold">
                  Podcasts
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div>
              <MainCards />
            </div>
          </div>
          <div>
            <GalleryCards />
          </div>
        </main>
      </div>
      <footer className="h-24 p-4">
        <Footer />
      </footer>
    </div>
  );
}
