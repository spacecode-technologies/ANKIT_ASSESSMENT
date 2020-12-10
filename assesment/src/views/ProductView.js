import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useProductStyles } from '../style';
import { listProductDetails } from '../actions/productActions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, Divider, Grid, Typography } from '@material-ui/core';

const ProductView = ({ match }) => {
  const classes = useProductStyles();
  const dispatch = useDispatch();
  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, img, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails('BG000050'));
  }, [dispatch, params.match]);
  return (
    <>
      <div className={classes.header}>
        <RouterLink to='/inventory' mb={3} className={classes.link}>
          <ArrowBackIosIcon style={{ fontSize: 'small' }} /> Back to Inventory
        </RouterLink>
        <Typography variant='h5' noWrap className={classes.typo}>
          Inventory &gt;&gt; BG000050
        </Typography>
      </div>
      <Grid container direction='row' xs={12} alignItems='center'>
        <Grid item xs={6}>
          <img src={img} alt='Product Img' className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <Typography color='textSecondary' variant='h6'>
            rfid_number: BG000050
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            sku_number:BG000050
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            Design Code: 50
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            design_category: BNG
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            design_color: Y
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            sku_quantity: 50
          </Typography>
          <Divider />
          <Typography color='textSecondary' variant='h6'>
            sales_value: 7150
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductView;
