import React from "react";

type Props = {
  name: string;
};

export const MenuCategories = ({ name }: Props) => {
  return (
    <>
      <div className="flex h-8 mt-5 bg-zinc-800 p-2 rounded-full items-center cursor-pointer font-semibold">
        <span className="text-center">{name}</span>
      </div>
    </>
  );
};
