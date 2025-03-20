import axios from "axios";
import React, { useEffect, useState } from "react";
function Home() {
    let [category, setCategory] = useState([])
    let token = `Xg5XCjz4AB1tGDnDJwYcfFBPnSSH6njcs7-AcSFu0sw`;
useEffect(function() {
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
}, [])
    
  return (
    <div>
      <nav className="w-full bg-white px-6 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <i className="fa-brands fa-unsplash "></i>
            <div className="relative rounded-full bg-[#E7E7E7]">
              <i className="fa-solid  fa-search absolute left-5 top-3 "></i>

              <input
                type="text"
                placeholder="Search photos and illustrations"
                className="w-3xl pl-12 pr-4 py-2 focus:outline focus:bg-white rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium">Get Unsplash+</button>
            <button className="text-sm font-medium border px-4 py-1 rounded-full">
              Submit an image
            </button>
            <i className="fa-solid fa-bell text-[#CCCCCC] hover:text-[#111111] cursor-pointer"></i>
            <i className="fa-solid fa-circle-user text-[#E6E6E6] text-2xl"></i>
          </div>
        </div>

        <div className="flex space-x-4 overflow-auto mt-3 pb-2">
          {category.map((item, index) => (
            <button
              key={index}
              className="text-sm cursor-pointer text-gray-600 hover:text-black whitespace-nowrap"
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Home;
