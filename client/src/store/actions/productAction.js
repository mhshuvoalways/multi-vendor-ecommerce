import * as Types from "../constants/ProductTypes";
import axios from "../../utils/axios";

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
    })
    .catch((err) => {
      dispatch({
        type: Types.UPLOAD_PRODUCT_ERROR,
        payload: {
          error: err.response.data,
        },
      });
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
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_PRODUCT_ERROR,
        payload: err.response.data,
      });
    });
};

// export const updateProduct = (id, body) => (dispatch) => {
//   axios
//     .put("/product/edit/" + id, body)
//     .then((response) => {
//       dispatch({
//         type: Types.UPDATE_PRODUCT,
//         payload: {
//           product: response.data,
//           id,
//         },
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: Types.UPDATE_PRODUCT_ERROR,
//         payload: err.response.data,
//       });
//     });
// };

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
