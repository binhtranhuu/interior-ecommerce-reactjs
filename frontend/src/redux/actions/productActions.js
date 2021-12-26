import Axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_RELATED_FAIL,
  PRODUCT_RELATED_REQUEST,
  PRODUCT_RELATED_SUCCESS,
} from '../constants/productConstants';

export const listProducts =
  ({ category = '' }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/products?category=${category}`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: catchErrors(error) });
    }
  };

export const detailsProduct = (slug) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: slug });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/products/${slug}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: catchErrors(error) });
  }
};

export const listProductsRelated =
  (slug, page = 1) =>
  async (dispatch) => {
    dispatch({ type: PRODUCT_RELATED_REQUEST, payload: slug });
    try {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/products/related/${slug}?pageNumber=${page}`
      );
      dispatch({ type: PRODUCT_RELATED_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_RELATED_FAIL, payload: catchErrors(error) });
    }
  };
