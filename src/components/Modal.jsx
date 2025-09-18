import React from "react";
import { useSelector } from "react-redux";

function Modal() {
  const card = useSelector((state) => state.modal);
  let cardData = card.modal;

 
  console.log(cardData);
  
  return (
    <dialog id="my_modal_1" className="modal" open>
      <div className="modal-box max-w-6xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Unsplash !</h3>
          <form method="dialog">
            <button className="cursor-pointer text-2xl">✕</button>
          </form>
        </div>

        {cardData && (
          <div className="p-5">
            <div className="w-full lg:w-2/3">
              <img
                src={cardData?.urls?.small}
                alt="modal-img"
                className="rounded"
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/3 px-3 mt-5 lg:mt-0">
              <h3 className="border-b text-xl font-semibold mb-4 text-gray-700">
                Details
              </h3>
              <figcaption className="flex items-center space-x-4 mb-4">
                <img
                  src={cardData?.user?.profile_image?.medium}
                  alt="profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{cardData?.user?.name}</div>
                  <div className="text-sm text-gray-500">
                    {cardData?.user?.location || "Unknown"}
                  </div>
                </div>
              </figcaption>
              <p>
                <span className="font-semibold">Author: </span>
                {cardData?.user?.name}
              </p>
              <p>
                <span className="font-semibold">Location: </span>
                {cardData?.user?.location}
              </p>
              <p>
                <span className="font-semibold">Total Likes: </span>
                {cardData?.user?.total_likes}
              </p>
              <p>
                <span className="font-semibold">Total Photos: </span>
                {cardData?.user?.total_photos}
              </p>
              <div className="mt-5">
                <a
                  href={cardData?.links?.download}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200"
                >
                  View Original Image
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
