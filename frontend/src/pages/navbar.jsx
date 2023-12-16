import React, { useState } from "react";
import "../App.css";

const Navbar = () => {

  return (
    <nav>
    <div class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <h1 className='text-xl '>Alzheimer Diagnosis</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        upload image
      </button>
    </div>
    </nav>
    
  );
};

export default Navbar;