import * as Types from "../constants/ProductTypes";
import axios from "../../utils/axios";
import alertAction from "./AlertAction";

export const createProduct = (formData) => (dispatch) => {
  axios
    .post("/product/add", formData)
    .then((response) => {
      dispatch({
        type: Types.UPLOAD_PRODUCT,
        payload: {
          product: response.data,
        },
      });
      dispatch(alertAction("Product added"));
    })
    .catch((err) => {
      dispatch({
        type: Types.UPLOAD_PRODUCT_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(alertAction("Opps! Something is wrong. Please try again!"));
    });
};

export const getProducts = () => (dispatch) => {
  axios
    .get("/product/get")
    .then((response) => {
      dispatch({
        type: Types.GET_PRODUCT,
        payload: {
          product: response.data,
        },
      });
      dispatch(searchProduct());
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_PRODUCT_ERROR,
        payload: {
          error: err.response,
        },
      });
    });
    dispatch(searchProduct());
};

export const filterProducts = (value) => (dispatch) => {
  axios
    .post("/product/filterproducts", value)
    .then((response) => {
      dispatch({
        type: Types.FILTER_PRODUCT,
        payload: {
          product: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.FILTER_PRODUCT_ERROR,
        payload: {
          error: err.response,
        },
      });
    });
};

export const searchTerm = (value) => (dispatch) => {
  dispatch({
    type: Types.SEARCH_TERM,
    payload: value,
  });
};

export const searchProduct = () => (dispatch) => {
  dispatch({
    type: Types.SEARCH_PRODUCT,
  });
};

export const getMyProducts = () => (dispatch) => {
  axios
    .get("/product/getmyproducts")
    .then((response) => {
      dispatch({
        type: Types.GET_MY_PRODUCT,
        payload: {
          product: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MY_PRODUCT_ERROR,
        payload: {
          error: err.response,
        },
      });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete("/product/delete/" + id)
    .then((response) => {
      dispatch({
        type: Types.DELETE_PRODUCT,
        payload: response.data,
      });
      dispatch(alertAction("Delete product"));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_PRODUCT_ERROR,
        payload: err.response.data,
      });
    });
};

export const freshProduct = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_PRODUCT,
  });
};

export const modalToggle = () => (dispatch) => {
  dispatch({
    type: Types.MODAL_TOGGLE,
  });
};
