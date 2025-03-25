import React, { useEffect, useState } from "react";
import camera from "../img/search.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { remuv } from "../hooks/setUser";

function Like() {
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState([]);
  let token = `Xg5XCjz4AB1tGDnDJwYcfFBPnSSH6njcs7-AcSFu0sw`;
  const user = useSelector((state) => state.user.user);
  const like = useSelector((state) => state.like);
  let dispatch = useDispatch();
  async function sign() {
    try {
      await signOut(auth);
      dispatch(remuv());
      toast.success("See you soon");
    } catch (eror) {
      toast.error(eror);
    }
  }
  console.log(like);
  useEffect(function () {
    axios
      .get("https://api.unsplash.com/topics?per_page=30", {
        headers: {
          Authorization: `Client-ID ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCategory(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function login() {
    navigate("/login");
  }
  return (
    <div>
      <nav className="mx-auto max-w-7xl bg-white py-3">
        <div className="flex items-center justify-between mx-auto gap-4">
          <div className="flex items-center space-x-4 flex-grow ">
            <i className="fa-brands fa-unsplash text-4xl"></i>
            <div className="relative rounded-full bg-[#E7E7E7] flex-grow min-w-0">
              <i className="fa-solid fa-search absolute left-5 top-3"></i>
              <img
                src={camera}
                className="absolute max-md:hidden right-4 top-2"
                alt=""
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search photos and illustrations"
                className="w-full pl-12 pr-12 py-2 focus:outline focus:bg-white rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center max-lg:hidden space-x-4 ">
            <button className="text-sm max-lg:hidden font-medium whitespace-nowrap">
              Get Unsplash+
            </button>
            <button className="text-sm max-md:hidden font-medium border px-4 py-1 rounded-full whitespace-nowrap">
              Submit an image
            </button>
            <i className="fa-solid ml-3 fa-bell hidden md:inline text-[#CCCCCC] hover:text-[#111111] cursor-pointer"></i>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow-md"
              >
                <li>
                  <a className="text-xl">View profile</a>
                </li>
                <li>
                  <a className="text-xl">Liked Photos</a>
                </li>
                <li>
                  <a className="text-xl">Settings</a>
                </li>
                <li className="underline">
                  <button onClick={sign} className="text-xl">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <p className="cursor-pointer" onClick={login}>
              Login
            </p>
          )}
          <i className="fa-solid fa-bars ml-3 text-[#767676] cursor-pointer hidden "></i>
        </div>
        <div className="flex gap-4 overflow-x-auto mt-3 pb-2 whitespace-nowrap">
          {category?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleCategory(item);
              }}
              className="text-sm cursor-pointer text-gray-600 hover:text-black"
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Like;
