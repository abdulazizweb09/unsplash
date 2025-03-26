import React, { useState } from "react";
import bg from "../img/bg.avif";
import { useNavigate } from "react-router-dom";

let test = `url(${bg})`;

function NotFound() {
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  let navigate=useNavigate()
  let handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  function hom() {
    navigate("/");
  }
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: test }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 bg-[#010101]/90"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.9))`,
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
        <div>
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl mt-4">Kechirasiz, sahifa topilmadi.</p>
          <p onClick={hom} className="mt-6 inline-block px-6 py-2 text-lg bg-white text-black cursor-pointer rounded-lg">
            Bosh sahifaga qaytish
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
