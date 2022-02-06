import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import { filterProducts, searchTerm } from "../../store/actions/productAction";
import { getCategory } from "../../store/actions/categoryAction";
import { getTags } from "../../store/actions/tagAction";

const Index = () => {
  const [categories, setCategoies] = useState({});
  const [tags, setTags] = useState({});
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

  const searchTermHandler = (event) => {
    dispatch(searchTerm(event.target.value));
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
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
  }, [categories, dispatch, tags]);

  return (
    <Filter
      categoryReducer={categoryReducer}
      onChangeHandler={onChangeHandler}
      searchTermHandler={searchTermHandler}
      categories={categories}
      tagsReducer={tagsReducer}
      tags={tags}
      onClickTagHandler={onClickTagHandler}
    />
  );
};

export default Index;
