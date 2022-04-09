import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../products/Products";
import ProductTop from "./ProductTop";
import ProductLeft from "./ProductLeft";
import FilterTop from "./FilterTop";
import FilterLeft from "./FilterLeft";
import { filterProducts } from "../../store/actions/productAction";
import { getCategory } from "../../store/actions/categoryAction";
import { getTags } from "../../store/actions/tagAction";

const Index = () => {
  const [state, setState] = useState({ filter: false });
  const [categories, setCategoies] = useState({});
  const [tags, setTags] = useState({});
  const [logHighValue, setlogHighValue] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const categoryReducer = useSelector((el) => el.categoryReducer);
  const tagsReducer = useSelector((el) => el.tagsReducer);
  const productReducer = useSelector((el) => el.productReducer);

  const dispatch = useDispatch();

  const filterHandler = () => {
    setState({ filter: !state.filter });
  };

  const onChangeHandler = (event) => {
    if (event.target.checked) {
      setCategoies({
        ...categories,
        [event.target.name]: event.target.name,
      });
    } else {
      setCategoies({
        ...categories,
        [event.target.name]: "",
      });
    }
  };

  const onClickTagHandler = (e) => {
    if (tags[e.target.innerText] === e.target.innerText) {
      setTags({
        ...tags,
        [e.target.innerText]: "",
      });
    } else {
      setTags({
        ...tags,
        [e.target.innerText]: e.target.innerText,
      });
    }
  };

  const searchTermHandler = (value) => {
    setSearchTerm(value);
  };

  const lowHigh = (v) => {
    setlogHighValue(v);
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      filterProducts({
        logHighValue: logHighValue,
        search: searchTerm,
        categories: {
          ...categories,
        },
        tags: {
          ...tags,
        },
      })
    );
  }, [categories, dispatch, logHighValue, searchTerm, tags]);

  return (
    <div>
      <div className="block sm:hidden">
        <ProductTop
          filterHandler={filterHandler}
          state={state}
          productReducer={productReducer}
        />
        {state.filter && (
          <FilterTop
            productReducer={productReducer}
            categoryReducer={categoryReducer}
            onChangeHandler={onChangeHandler}
            searchTermHandler={searchTermHandler}
            categories={categories}
            tagsReducer={tagsReducer}
            tags={tags}
            onClickTagHandler={onClickTagHandler}
            lowHigh={lowHigh}
          />
        )}
        <Products
          productReducer={productReducer}
          allProducts={productReducer.products}
        />
      </div>
      <div className="hidden sm:flex w-11/12 m-auto">
        <FilterLeft
          productReducer={productReducer}
          categoryReducer={categoryReducer}
          onChangeHandler={onChangeHandler}
          searchTermHandler={searchTermHandler}
          categories={categories}
          tagsReducer={tagsReducer}
          tags={tags}
          onClickTagHandler={onClickTagHandler}
        />
        <div className="w-4/5">
          <ProductLeft productReducer={productReducer} lowHigh={lowHigh} />
          <Products
            productReducer={productReducer}
            allProducts={productReducer.products}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
