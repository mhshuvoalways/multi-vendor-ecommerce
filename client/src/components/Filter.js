import React from "react";

const Filter = () => {
  return (
    <div className="bg-gray-50 mb-5">
      <div className="flex flex-wrap gap-8 md:justify-between justify-around w-11/12 m-auto">
        <div>
          <p className="text-xl mt-10 mb-2">Search or Select</p>
          <input
            type="text"
            placeholder="Search Product..."
            className="px-2 py-2 my-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
          />
          <div className="my-1">
            <label>
              <select className="px-2 w-full py-2 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring">
                <option>Default</option>
                <option>Price - High to Low</option>
                <option>Price - Low to High</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <p className="text-xl mt-10 mb-2">Categories</p>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">All Categories</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Fashion</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Plant</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Flower</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Book</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Cosmetics</span>
            </label>
          </div>
        </div>
        <div>
          <p className="text-xl mt-10 mb-2">Color</p>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">All Colors</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">White</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Black</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Blue</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Brown</span>
            </label>
          </div>
        </div>
        <div>
          <p className="text-xl mt-10 mb-2">Size</p>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">All Sizes</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">X</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">M</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">XL</span>
            </label>
          </div>
          <div>
            <label className="inline-flex my-1 items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">XLL</span>
            </label>
          </div>
        </div>
        <div>
          <p className="text-xl mt-10 mb-2">Tags</p>
          <div>
            <p className="rounded-full px-2 my-1 w-24 cursor-pointer hover:bg-purple-500 hover:text-white">
              Fashion
            </p>
            <p className="rounded-full px-2 my-1 w-24 cursor-pointer hover:bg-purple-500 hover:text-white">
              Jacket
            </p>
            <p className="rounded-full px-2 my-1 w-24 cursor-pointer hover:bg-purple-500 hover:text-white">
              Flower
            </p>
            <p className="rounded-full px-2 my-1 w-24 cursor-pointer hover:bg-purple-500 hover:text-white">
              Plant
            </p>
            <p className="rounded-full px-2 my-1 w-24 cursor-pointer hover:bg-purple-500 hover:text-white">
              Cosmetics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
