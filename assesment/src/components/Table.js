import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VisibilityIcon from '@material-ui/icons/Visibility';
import data from '../data.json';

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
  const rows = data.data_array;
  console.log(rows);

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
          {rows.map((row) => (
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
                <Moment format='L'>{row.createdAt}</Moment>
              </TableCell>
              <TableCell align='left'>
                <VisibilityIcon className={classes.iconColor} />{' '}
                <PictureAsPdfIcon className={classes.iconColor} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
