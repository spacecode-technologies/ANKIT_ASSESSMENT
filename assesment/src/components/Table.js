import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'react-moment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  
  table: {
    minWidth: 650,
  },
  tableHeader: {
    backgroundColor: '#CCCCCC',
  },
  tableCell: {
    fontWeight: 'bold',
  },
  iconColor: {
    color: '#6F6F6F',
    fontSize: 'medium',
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  if (!loading) {
    console.log(products);
  }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listProducts());
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell className={classes.tableCell} align='left'>
              SKU
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Design Code
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Material
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Design Category
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Diamond Ct.
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Net Weight
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Price
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              SKU Qty
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Date
            </TableCell>
            <TableCell className={classes.tableCell} align='left'>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <CircularProgress disableShrink />
          ) : (
            products.map((row) => (
              <TableRow key={row.design_code}>
                <TableCell align='left'>{row.sku_number}</TableCell>
                <TableCell align='left'>{row.design_code}</TableCell>
                {row.metal_type.length === 0 ? (
                  <TableCell align='left'> - </TableCell>
                ) : (
                  <TableCell align='left'>{row.metal_type}</TableCell>
                )}

                <TableCell align='left'>{row.design_category}</TableCell>
                <TableCell align='left'>{row.diamond_weight}</TableCell>
                <TableCell align='left'>{row.net_weight}</TableCell>
                <TableCell align='left'>{row.sales_value}</TableCell>
                <TableCell align='left'>{row.sku_quantity}</TableCell>
                <TableCell align='left'>
                  <Moment format='DD-MM-YYYY'>{row.createdAt}</Moment>
                </TableCell>
                <TableCell align='left'>
                  <VisibilityIcon className={classes.iconColor} />{' '}
                  <PictureAsPdfIcon className={classes.iconColor} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
