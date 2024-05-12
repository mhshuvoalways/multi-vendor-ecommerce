import React from "react";
import { useDispatch } from "react-redux";

const Modal = ({ modal, children, modalHandler, modalTitle }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {modal && (
        <div>
          <div className="fixed container w-11/12 mx-auto inset-0 z-50 flex justify-center items-center">
            <div
              className="relative my-6 w-full overflow-y-scroll modal"
              style={{
                maxHeight: "90vh",
              }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span
                      className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                      onClick={() => dispatch(modalHandler())}
                    >
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                <div className="p-6 text-gray-500 text-lg leading-relaxed">
                  {/* Content start */}
                  {children}
                  {/* Content end */}
                </div>
              </div>
            </div>
          </div>
          <div className="left-0 top-0 bottom-0 right-0 fixed bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default Modal;
