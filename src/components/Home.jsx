import axios from "axios";
import React, { useEffect, useState } from "react";
import camera from "../img/search.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetch } from "../hooks/useFetch";
function Home() {
  let [category, setCategory] = useState([]);
  let token = `Xg5XCjz4AB1tGDnDJwYcfFBPnSSH6njcs7-AcSFu0sw`;
  // const token = import.meta.env.VITE_ACESS_KEY;
  let { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${token}&query=random`
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
          {category?.map((item, index) => (
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
        {isPending && (
          <h2 className="text-3xl justify-center flex mt-10">Loading...</h2>
        )}
      </div>
      <ResponsiveMasonry
        className="mx-auto container w-6xl"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="30px">
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="group cursor-pointer relative">
                <img className="w-full" src={item.urls.full} />
                <div className="group-hover:block text-white top-0 w-full h-full p-4 hidden absolute bg-black/15">
                  <div>
                    <i class="fa-solid fa-heart text-xl absolute right-18 w-8 h-7 pt-[5px] pl-[5px] rounded-[4px] bg-white/70 text-black/80"></i>
                    <i class="fa-solid fa-plus text-xl absolute right-7 w-8 h-7 pt-[5px] pl-[6px] rounded-[4px] bg-white/70 text-black/80"></i>
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
                  <a href={item.urls.full} download>
                    <i class="fa-solid fa-download bottom-6 text-xl absolute right-7 w-8 h-7 pt-[5px] pl-[6px] rounded-[4px] bg-white/70 text-black/80"></i>
                  </a>
                </div>
              </div>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Home;

