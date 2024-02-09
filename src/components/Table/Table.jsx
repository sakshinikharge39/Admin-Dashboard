import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Chiken Fry', 18908424, "2 March 2022", "Approved"),
  createData('Big Baza Bang', 18341878, "19 April 2022", "Pending"),
  createData('Mouth Freshner', 23177831, "10 August 2022", "Approved"),
  createData('Cupcake', 25931742, "6 September 2022", "Delivered"),
  createData('Gingerbread', 35657120, "3 February 2022", "Pending"),
];
const makeStyle = (status) => {
    if (status=== 'Approved') {
        return{
            color : ' green'
        }    
    }
    else if (status === 'Pending') {
        return{
            color: 'red',
        }
    }
    else{
        return{
            color: 'blue',
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>

    <TableContainer component={Paper}
    style={{
        boxShadow: '0px 13px 20px 0px #80808029'
    }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date&nbsp;(g)</TableCell>
            <TableCell align="left">Status&nbsp;(g)</TableCell>
            <TableCell align="left">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
              <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
