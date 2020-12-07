import React from 'react';
import { Grid, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useInventoryPageStyles } from '../style';

import Table from '../components/Table'

const InventoryPage = () => {
  const classes = useInventoryPageStyles();
  return (
    <>
      <Grid
        container
        spacing={4}
        alignItems='center'
        style={{ marginBottom: '10px' }}>
        <Grid item md={3}>
          <InputBase className={classes.input} endAdornment={<SearchIcon />} />
        </Grid>
        <Grid item md={3}>
          <Typography variant='body1'>
            <span className={classes.typography}>Total Stones </span>: 50
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant='body1'>
            <span className={classes.typography}>Total Carats </span>: 120
          </Typography>
        </Grid>
      </Grid>
      <Table />
    </>
  );
};

export default InventoryPage;
