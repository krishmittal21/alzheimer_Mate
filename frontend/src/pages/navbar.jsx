import React, { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react';
import "../App.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#ffcad4" }}>
      <div className="flex justify-between items-center p-5">
        {/*<Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className="text-3xl"
          color="#a73439"
        />*/}
        <button
          className="py-2.5 px-5 text-sm font-medium text-[#a73439]  ">
          Upload Image
        </button>
      </div>
    </nav>
  );
};

export default Navbar;