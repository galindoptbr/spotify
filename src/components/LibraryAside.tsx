import Image from "next/image";
import React from "react";

import Singer1 from "@/assets/singer-1.png";

type Props = {
  title: string;
  name: string;
};

export const LibraryAside = ({ title, name }: Props) => {
  return (
    <>
      <div className="flex gap-3 mt-10 items-center">
        <Image className="w-16" src={Singer1} alt="singer 1" />
        <div className="flex flex-col">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-zinc-400">{name}</span>
        </div>
      </div>
    </>
  );
};
