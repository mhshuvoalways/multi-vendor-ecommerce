import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/actions/subcriberAction";

const Footer = () => {
  const [state, setState] = useState("");

  const dispatch = useDispatch();
  const btnReducer = useSelector((store) => store.btnReducer);
  const subscriberReducer = useSelector((store) => store.subscriberReducer);

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage(state));
  };

  useEffect(() => {
    if (subscriberReducer) {
      setState("");
    }
  }, [subscriberReducer]);

  return (
    <div className="bg-gray-800 text-white mt-36 py-20">
      <div className="w-11/12 m-auto container">
        <div className="flex gap-8 flex-wrap justify-between">
          <ul>
            <li className="text-lg">ABOUT US</li>
            <li className="cursor-pointer">
              <a href="/aboutus" target="_blank">
                About Us
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/contact" target="_blank">
                Contact
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-lg">USEFUL LINKS</li>
            <li className="cursor-pointer">
              <a href="/privacy-policy" target="_blank">
                Returns
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/privacy-policy" target="_blank">
                Support Policy
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-lg">FOLLOW US</li>
            <li className="cursor-pointer">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
          </ul>
          <ul>
            <li className="text-lg">SUBSCRIBE</li>
            <li>
              Get E-mail updates about our latest shop and special offers.
            </li>
            <li className="mt-3">
              <input
                type="email"
                className="px-2 py-1 placeholder-gray-400 w-full  text-gray-600 max-w-xs bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                onChange={onChangeHandler}
                value={state}
              />
            </li>
            <li className="mt-3">
              {btnReducer ? (
                <button
                  className="shadow text-xs bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={onSubmitHandler}
                >
                  SUBSCRIBE
                </button>
              ) : (
                <button
                  className="shadow text-xs bg-gray-600 cursor-not-allowed opacity-50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={onSubmitHandler}
                >
                  SUBSCRIBE
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
