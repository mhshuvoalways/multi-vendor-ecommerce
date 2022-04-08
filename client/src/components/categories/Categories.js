import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    <div className="w-11/12 m-auto flex gap-3 flex-wrap justify-center">
      {categoryReducer.isLoading ? (
        <Loading />
      ) : (
        categoryReducer.categories.map((category) => (
          <Link
            to={"/category/" + category.name}
            className="border py-2 px-5 w-64 flex gap-3 flex-wrap justify-between items-center"
            key={category._id}
          >
            <p>{category.name}</p>
            <img src={category.icon.url} alt="" className="w-8" />
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;
