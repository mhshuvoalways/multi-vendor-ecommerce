import React from "react";
import Autosuggest from "../../utils/AutoSuggest";

const Tags = ({ product, removeTag, tags, onClickTags }) => {
  return (
    <div>
      <div className="mt-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
          for="grid-last-name"
        >
          Tags
        </label>
        <div className="flex gap-1 flex-wrap mb-2">
          {product.finalTags &&
            product.finalTags.map((el) => (
              <div
                className="flex bg-gray-200 text-xs text-center border-gray-300 border-2 shadow-md items-center gap-1 p-1"
                key={el._id}
              >
                <i
                  className="fas fa-times cursor-pointer"
                  onClick={() => removeTag(el._id)}
                ></i>
                <p>{el.name}</p>
              </div>
            ))}
        </div>
      </div>
      <Autosuggest
        data={tags.searchTags}
        onClickTags={onClickTags}
        classNameProps="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholderProps="Provide some tags"
      />
    </div>
  );
};

export default Tags;
