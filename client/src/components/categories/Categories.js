import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../store/actions/categoryAction";
import Loading from "../utils/Loading";

const Categories = () => {
  const dispatch = useDispatch();
  const categoryReducer = useSelector((el) => el.categoryReducer);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      {categoryReducer.isLoading ? (
        <Loading />
      ) : (
        <div className="w-11/12 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 container">
          {categoryReducer.categories.map((category) => (
            <Link
              to={"/category/" + category.name}
              className="border py-2 px-5 flex gap-3 flex-wrap justify-between items-center"
              key={category._id}
            >
              <p>{category.name}</p>
              <img src={category.icon.url} alt="" className="w-8 object-cover" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
