import React from "react";
import Details from "./Details";

const Modal = ({ state, modalHandler }) => {
  return (
    <div>
      {state.modal && (
        <div
          className={
            state.modal
              ? "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-100"
              : "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          }
        >
          <div className="relative my-6 w-4/5 m-auto">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Modal Title</h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                  <span
                    className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                    onClick={modalHandler}
                  >
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="p-6 text-gray-500 text-lg leading-relaxed">
                <Details />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
