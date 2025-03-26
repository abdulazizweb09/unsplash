import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import camera from "../img/search.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { signOut } from "firebase/auth";
import { remuv } from "../hooks/setUser";

function User() {
  let user = useSelector((state) => state.user.user);
    let like = useSelector((state) => state.like)
  let navigate = useNavigate();
  let dispatch = useDispatch();
  function login() {
    navigate("/login");
  }
  async function sign() {
    try {
      await signOut(auth);
      dispatch(remuv());
      toast.success("See you soon");
    } catch (eror) {
      toast.error(eror);
    }
  }
  function lik() {
    navigate("/like");
  }
  function hom() {
    navigate("/");
  }

  return (
    <div>
      <nav className="mx-auto max-w-7xl bg-white py-3">
        <div className="flex items-center justify-between mx-auto gap-4">
          <div className="flex items-center space-x-4 flex-grow ">
            <i onClick={hom} className="fa-brands fa-unsplash text-4xl"></i>
            <div className="relative rounded-full bg-[#E7E7E7] flex-grow min-w-0">
              <i className="fa-solid fa-search absolute left-5 top-3"></i>
              <img
                src={camera}
                className="absolute max-md:hidden right-4 top-2"
                alt=""
              />
              <input
                type="text"
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
                  <a onClick={lik} className="text-xl">
                    Liked Photos
                  </a>
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
      </nav>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center pb-6 gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-300">
            <img
              src={user?.photoURL}
              className="w-32 h-32 rounded-full object-cover"
              alt="User"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{user?.displayName}</h1>
            <p className="text-gray-600">
              Download free, beautiful high-quality photos curated by{" "}
              {user?.displayName}.
            </p>
            <button className="mt-2 px-4 py-2 border flex items-center gap-2 rounded-md text-sm">
              <i className="fa-solid fa-pen"></i> Edit Profile
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-10 md:justify-start mt-6 space-x-6 text-gray-600 border-b pb-2 overflow-x-auto whitespace-nowrap">
          <button className="flex items-center space-x-1">
            <i className="fa-solid fa-image"></i>
            <span>Photos 0</span>
          </button>
          <button className="flex items-center space-x-1">
            <i className="fa-solid fa-pen-fancy"></i>
            <span>Illustrations 0</span>
          </button>
          <button className="flex items-center space-x-1 text-black font-semibold border-b-2 border-black">
            <i className="fa-solid fa-heart"></i>
            <span>Likes {like.length > 0 ? like.length : "0"}</span>
          </button>
          <button className="flex items-center space-x-1">
            <i className="fa-solid fa-folder"></i>
            <span>Collections 0</span>
          </button>
          <button className="flex items-center space-x-1">
            <i className="fa-solid fa-chart-simple"></i>
            <span>Stats</span>
          </button>
        </div>

        <div className="max-w-7xl container mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 900: 3, 750: 2, 350: 1, 600: 1 }}
          >
            <Masonry gutter="30px">
              {like.length > 0 &&
                like.map((item, index) => {
                  return (
                    <div key={index} className="group cursor-pointer relative">
                      <img
                        className="w-full max-sm:w-full max-sm:p-4"
                        src={item.urls.full}
                      />
                      <div className="group-hover:block text-white top-0 w-full h-full p-4 hidden absolute bg-black/15">
                        <div>
                          <i
                            className={`fa-solid fa-heart text-xl absolute right-18 w-8 h-7 pt-[5px] pl-[5px] text-red-500 rounded-[4px] bg-white/70 text-red-500"
                          }`}
                          ></i>
                          <i className="fa-solid fa-plus text-xl absolute right-7 w-8 h-7 pt-[5px] pl-[6px] rounded-[4px] bg-white/70 text-black/80"></i>
                        </div>
                        <div>
                          <div className="bottom-4 gap-3 items-center absolute flex">
                            <img
                              src={item.user.profile_image.small}
                              className="rounded-full"
                              alt=""
                            />
                            <div>
                              <p className="text-[#FDFDFD]">{item.user.name}</p>
                              <p>{item.user.instagram_username}</p>
                            </div>
                          </div>
                        </div>
                        <a>
                          <i className="fa-solid fa-download bottom-6 text-xl absolute right-7 w-8 h-7 pt-[5px] pl-[6px] rounded-[4px] bg-white/70 text-black/80"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}

export default User;
