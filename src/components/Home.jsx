import axios from "axios";
import React, { useEffect, useState } from "react";
import camera from "../img/search.svg";
import { useFetch } from "../hooks/useFetch";
function Home() {
  let [category, setCategory] = useState([]);
  // let token = `Xg5XCjz4AB1tGDnDJwYcfFBPnSSH6njcs7-AcSFu0sw`;
  const token = import.meta.env.VITE_ACESS_KEY;
  let { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${token}&query=car`
  );
  console.log(data);
  
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

  return (
    <div>
      <nav className="mx-auto max-w-8xl bg-white px-6 py-3">
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
            <i className="fa-solid fa-bell hidden md:inline text-[#CCCCCC] hover:text-[#111111] cursor-pointer"></i>
          </div>
          <i className="fa-solid fa-circle-user text-[#E6E6E6] text-2xl"></i>
          <i className="fa-solid fa-bars text-[#767676] cursor-pointer hidden "></i>
        </div>

        <div className="flex gap-4 overflow-x-auto mt-3 pb-2 whitespace-nowrap">
          {category.map((item, index) => (
            <button
              key={index}
              className="text-sm cursor-pointer text-gray-600 hover:text-black"
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
      <div>
        {isPending && <h2 className="text-3xl justify-center flex mt-10">Loading...</h2>}
      </div>
    </div>
  );
}

export default Home;
