import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { TableHead } from '@material-ui/core';
import Moment from 'react-moment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { listProducts } from '../actions/productActions';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'>
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'>
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    backgroundColor: '#979797',
  },
  tableCell: {
    fontWeight: 'bold',
  },
  iconColor: {
    color: '#6F6F6F',
    fontSize: 'medium',
  },
  
});

function InventoryTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {
    products,
    pages,
    currentPage,
  } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listProducts(page, rowsPerPage));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo, page, rowsPerPage]);

  

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value),10);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label='custom pagination table'>
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
          {
            products.map((row) => (
              <TableRow key={row.design_code}>
                <TableCell align='left'>{row.sku_number}</TableCell>
                <TableCell align='left'>{row.design_code}</TableCell>
                <TableCell align='left'>{row.metal_type}</TableCell>
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
          }
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={pages * rowsPerPage}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
export default InventoryTable;
