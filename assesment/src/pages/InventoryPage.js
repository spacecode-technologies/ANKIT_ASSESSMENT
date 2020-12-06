import React from 'react';
import { Grid, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useInventoryPageStyles } from '../style';

const InventoryPage = () => {
  const classes = useInventoryPageStyles();
  return (
    <>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <InputBase className={classes.input} endAdornment={<SearchIcon />} />
        </Grid>
      </Grid>
    </>
  );
};

export default InventoryPage;
