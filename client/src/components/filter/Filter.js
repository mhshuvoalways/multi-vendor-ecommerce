import React from "react";

const Filter = ({
  categoryReducer,
  onChangeHandler,
  searchTermHandler,
  categories,
  tagsReducer,
  tags,
  onClickTagHandler,
}) => {

  return (
    <div className="bg-gray-50 mb-5 pb-5">
      <div className="flex flex-wrap gap-8 md:justify-between justify-around w-11/12 m-auto">
        <div>
          <p className="text-xl mt-10 mb-2">Search or Select</p>
          <input
            type="text"
            placeholder="Search Product..."
            className="px-2 py-2 my-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            onChange={searchTermHandler}
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
          {categoryReducer.categories.map((el) => (
            <div key={el._id}>
              <label className="inline-flex my-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox cursor-pointer"
                  onChange={(event) => onChangeHandler(event)}
                  name={el.name}
                  checked={categories[el.name] === el.name}
                />
                <span className="ml-2">{el.name}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xl mt-10 mb-2">Tags</p>
          {tagsReducer.tags.map((tag) => (
            <p
              key={tag._id}
              className={
                Object.values(tags).length
                  ? Object.values(tags).map((el) =>
                      el === tag.name
                        ? "rounded-full px-2 my-1 cursor-pointer bg-purple-500 text-black"
                        : "rounded-full px-2 my-1 cursor-pointer hover:bg-purple-500 hover:text-white"
                    )
                  : "rounded-full px-2 my-1 cursor-pointer hover:bg-purple-500 hover:text-white"
              }
              onClick={(e) => onClickTagHandler(e)}
              name={tag.name}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
