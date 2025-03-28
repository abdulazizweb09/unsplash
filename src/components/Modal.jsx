import React from "react";

function Modal() {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-5">Reset password:</h3>
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-md w-full border"
          />
          <div className="modal-action justify-between">
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              type="button"
              className="btn border"
            >
              Close
            </button>
            <button className="btn border">
              <i className="fa-solid fa-paper-plane"></i>Send
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
