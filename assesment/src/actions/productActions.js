import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';
import { logout } from './userActions';

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-web-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjMyMjY0ODQxIiwibmFtZSI6Im9yc2luaSBjb21wYW55IiwicGFzc3dvcmQiOiJhZG1pbiIsInJvb3QiOnsic3ViU2VjdGlvbklkIjoiNWVlMDhkYWY2ZTdiNTQ2M2M2MDhjNTUzIiwic2VjdGlvbklkIjoiNWVlMDhkYWY2ZTdiNTQ2M2M2MDhjNTUyIiwiZmxvb3JJZCI6IjVlZTA4ZGFmNmU3YjU0NjNjNjA4YzU1MSIsImJyYW5jaElkIjoiNWVlMDhkYWY2ZTdiNTQ2M2M2MDhjNTUwIiwiY29tcGFueUlkIjoiNWVlMDhkYWY2ZTdiNTQ2M2M2MDhjNTRmIn0sImVtcElkIjoib3JzaW5pY29tQGdtYWlsLmNvbSIsInVzZXJ0eXBlIjoiQURNSU4iLCJpYXQiOjE1OTYwMDI0NzYsImV4cCI6MTYyMzMxMDYzOH0.OrFyBJOtzsIKrouNlV8EN6a9jCXQ2aD3sK0tl4uzH7E',
      },
    };
    const { data } = await axios.get(
      `https://d.jeweltrace.in/sku?id=5cfe1974a24ac0157013f843&rootInfo=company&page_no=0&limit=10`,
      config
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
