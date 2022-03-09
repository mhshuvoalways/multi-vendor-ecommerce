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
      dispatch(alertAction(err.response.data.image));
      dispatch(alertAction(err.response.data.name));
      dispatch(alertAction(err.response.data.regularPrice));
      dispatch(alertAction(err.response.data.salePrice));
      dispatch(alertAction(err.response.data.category));
      dispatch(alertAction(err.response.data.tags));
      dispatch(alertAction(err.response.data.description));
      dispatch(alertAction(err.response.data.message));
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
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_PRODUCT_ERROR,
        payload: {
          error: err.response,
        },
      });
    });
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

export const updateProduct = (id, product) => (dispatch) => {
  axios
    .put("/product/edit/" + id, product)
    .then((response) => {
      dispatch({
        type: Types.UPDATE_PRODUCT,
        payload: {
          id: id,
          product: response.data,
        },
      });
      dispatch(alertAction("Update product!"));
      dispatch(modalProduct());
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_PRODUCT_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.image));
      dispatch(alertAction(err.response.data.name));
      dispatch(alertAction(err.response.data.regularPrice));
      dispatch(alertAction(err.response.data.salePrice));
      dispatch(alertAction(err.response.data.category));
      dispatch(alertAction(err.response.data.tags));
      dispatch(alertAction(err.response.data.description));
      dispatch(alertAction(err.response.data.message));
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

export const modalProduct = (id) => (dispatch) => {
  dispatch({
    type: Types.MODAL_PRODUCT,
    payload: id,
  });
};
