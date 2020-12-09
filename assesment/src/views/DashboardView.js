import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { listProducts } from '../actions/productActions';


const DashboardView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listProducts(0,25));
      setData(products)
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo, products]);
  return (
    <Grid item xs={12}>
      <LineChart width={1200} height={400} data={data}>
        <Line
          type='monotone'
          dataKey='sales_value'
          stroke='#c60055'
          dot={true}
        />
        <CartesianGrid stroke='#ccc' strokeDasharray='3 3' />
        <XAxis fontSize={20} />
        <YAxis fontSize={20} padding={{ top: 10 }} />
      </LineChart>
    </Grid>
  );
};

export default DashboardView;
