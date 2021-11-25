import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import { filterProducts } from "../../store/actions/productAction";
import { getCategory } from "../../store/actions/categoryAction";
import { getTags } from "../../store/actions/tagAction";

const Index = () => {
  const [categories, setCategoies] = useState({});
  const [tags, setTags] = useState({});
  const productReducer = useSelector((el) => el.productReducer);
  const categoryReducer = useSelector((el) => el.categoryReducer);
  const tagsReducer = useSelector((el) => el.tagsReducer);

  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getTags());
    if (productReducer.searchTerm) {
      setCategoies({});
      setTags({});
    }
  }, [dispatch, productReducer.searchTerm]);

  useEffect(() => {
    const category = Object.values(categories);
    const tag = Object.values(tags);
    if (category.length || tag.length) {
      dispatch(
        filterProducts({
          categories: {
            ...categories,
          },
          tags: {
            ...tags,
          },
        })
      );
    }
  }, [categories, dispatch, tags]);

  return (
    <Filter
      categoryReducer={categoryReducer}
      onChangeHandler={onChangeHandler}
      productReducer={productReducer}
      categories={categories}
      tagsReducer={tagsReducer}
      tags={tags}
      onClickTagHandler={onClickTagHandler}
    />
  );
};

export default Index;
