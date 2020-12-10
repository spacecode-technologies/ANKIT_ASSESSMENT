import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PdfDocument from './PdfDocument';
import ProductDetailsPdf from './ProductDetailsPdf';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const PdfButton = ({ id }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id1 = open ? 'simple-popover' : undefined;

  const productDetails = useSelector((state) => state.productDetails);
  const { product, img, error, loading } = productDetails;

  const handleOnClick = (event) => {
    dispatch(listProductDetails('BG000050'));
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton>
        <PictureAsPdfIcon
          onClick={handleOnClick}
          style={{ fontSize: 'small', color: '#6F6F6F' }}
        />
      </IconButton>
      <Popover
        id={id1}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <Typography className={classes.typography}>
          {loading && <CircularProgress disableShrink />}

          {product && (
            <PdfDocument
              title={id}
              document={<ProductDetailsPdf data={product} img={img} />}
            />
          )}
        </Typography>
      </Popover>
    </>
  );
};

export default PdfButton;
