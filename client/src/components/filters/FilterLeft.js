import React from "react";
import AutosuggestComponent from "../../utils/AutoSuggest";

const Filter = ({
  productReducer,
  categoryReducer,
  onChangeHandler,
  searchTermHandler,
  categories,
  tagsReducer,
  tags,
  onClickTagHandler,
}) => {
  return (
    <div className="w-80">
      <div>
        <p className="text-xl mb-2">Search</p>
        <div className="bg-gray-100 w-48">
          <AutosuggestComponent
            searchTermHandler={searchTermHandler}
            data={productReducer.products}
            search={true}
            classNameProps="px-2 py-2 my-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            placeholderProps="Search product..."
          />
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
      <div className="w-32">
        <p className="text-xl mt-10 mb-2">Tags</p>
        {tagsReducer.tags.map((tag) => (
          <p
            key={tag._id}
            className={
              Object.values(tags).length
                ? Object.values(tags).map((el) =>
                    el === tag.name
                      ? "rounded-full px-2 my-1 cursor-pointer bg-purple-500 text-black"
                      : "rounded-full px-2 my-1 cursor-pointer bg-gray-100 hover:bg-purple-500 hover:text-white"
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
  );
};

export default Filter;
