import React, { useEffect, useState } from "react";
import google from "../img/googlwebp.webp";
import { useRegister } from "../hooks/useRegister";
import { toast } from "react-toastify";

function Register() {
  let { registerWithGoogle,registerWithEmail } = useRegister();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pasword, setPasword] = useState(0);
  let [confirm, setConfirm] = useState(0);


  function valid() {
    if (email.length < 3) {
      toast.error("email kamida 3ta belgi bo'lishi kerak");
      return false
      
    }
    if (name.length < 3) {
      toast.error("ism kamida 3ta belgi bo'lishi kerak");
      return false;
    }
    if (pasword !== confirm) {
      toast.error("ikkala parol bir biriga mos kelmadi");
      return false;
    }
    if (pasword.length < 6) {
      toast.error("password kamida 6ta belgi bo'lishi kerak");
      return false;
    }
    return true;
  }
  let obj = {
    name,
    email,pasword
  }
  
  function submit(e) {
    e.preventDefault();
    if (obj&&valid()) {
      registerWithEmail(obj.name, obj.email, obj.pasword);
    }
  }
  
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/CiurescuP/LogIn-Form/main/bg.jpg')",
      }}
    >
      <form className="w-[450px] p-5 bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg">
        <h3 className="text-center text-white text-3xl font-bold mb-5">
          Register
        </h3>

        <label htmlFor="username" className="text-white text-lg font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Email or Phone"
          className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
        />

        <label htmlFor="email" className="text-white text-lg font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
        />
        <label htmlFor="password" className="text-white text-lg font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={pasword}
          onChange={(e) => setPasword(e.target.value)}
          placeholder="Password"
          className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
        />
        <label htmlFor="con" className="text-white text-lg font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          id="con"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
        />

        <div className="flex gap-5">
          <button onClick={submit} className="w-full mt-5 p-3 cursor-pointer bg-blue-600  text-white text-lg font-bold rounded hover:bg-blue-700 transition">
            Register
          </button>
          <button
            onClick={(e) => {
              e.preventDefault(), registerWithGoogle();
            }}
            className="w-full mt-5 p-3 flex justify-center gap-3 items-center cursor-pointer bg-green-600 text-white text-lg font-bold rounded hover:bg-green-700 transition"
          >
            <p>Google</p>
            <img className="w-10" src={google} alt="" />
          </button>
        </div>

        <p className="text-center text-white mt-4">
          Login with a social media account
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-blue-600 text-white text-xl hover:shadow-md transition">
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-blue-400 text-white text-xl hover:shadow-md transition">
            <i className="fa-brands fa-twitter"></i>
          </button>
          <button className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-pink-600 text-white text-xl hover:shadow-md transition">
            <i className="fa-brands fa-instagram"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
