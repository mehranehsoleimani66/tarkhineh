import { useEffect, useState } from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" w-full flex flex-row justify-between items-center border-b-2 shadow-slate-300  bg-gray-primary h-24">
      <Navbar />
    </div>
  );
};

export default Header;
