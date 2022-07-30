import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../style.css'
export default class TableComponent extends Component {
  render() {
    const { rows, handleInputChange } = this.props
    return (
      <div className='tableDiv'>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: "20%" }}><b>Add to favourite</b></TableCell>
                <TableCell ><b>Name</b></TableCell>
                <TableCell ><b>Description</b></TableCell>
                <TableCell ><b>Cast</b></TableCell>
                <TableCell ><b>Similer Movies</b></TableCell>
                <TableCell><b>Genre</b></TableCell>
                <TableCell><b>Language</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row, i) => (
                  <TableRow key={row.name}>
                    <TableCell align="center">
                      <input className="star" type="checkbox" defaultChecked={row.favt === 'on' ? true : false} name="favt" onChange={(e) => handleInputChange(e, i)} title="favourite" />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell >{row.des}</TableCell>
                    <TableCell >{row.cast}</TableCell>
                    <TableCell >{row.simMovies}</TableCell>
                    <TableCell >{row.genre}</TableCell>
                    <TableCell >{row.language}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}
