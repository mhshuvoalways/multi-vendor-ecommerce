import React from "react";

const Tags = ({
  product,
  removeTag,
  changeHandlerTag,
  tags,
  onClickTags,
  value,
}) => {
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
              <div className="flex bg-gray-200 text-xs text-center border-gray-300 border-2 shadow-md items-center gap-1 p-1"
              key={el._id}>
                <i
                  className="fas fa-times cursor-pointer"
                  onClick={() => removeTag(el._id)}
                ></i>
                <p>{el.name}</p>
              </div>
            ))}
        </div>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={value}
          autoComplete="off"
          placeholder="Provide some tags"
          onChange={changeHandlerTag}
        />
      </div>
      {tags.searchTags && tags.searchTerm && (
        <div className="bg-gray-200 mt-1 w-full sm:w-32 p-1 text-sm">
          {tags.searchTags.map((el) => (
            <ul key={el._id}>
              <li
                className="cursor-pointer hover:bg-gray-500 hover:text-gray-100 px-2 border-gray-100 border"
                onClick={() => onClickTags(el._id)}
              >
                {el.name}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tags;
