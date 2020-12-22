import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "occupation",
    label: "Occupation",
    minWidth: 170,
    align: "left",
  },
  {
    id: "birthday",
    label: "Birthday",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    width: "100%",
  },
  container: {
    height: 600,
  },
  row: {
    cursor: "pointer",
  },
});

const CharacterTable = ({ data, name, filter }) => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setRows(data);
  }, [data]);

  useEffect(() => {
    let filterRows = data.filter((data) => {
      if (data.name.toLowerCase().includes(name.toLowerCase())) return true;
      return false;
    });

    setRows(filterRows);
  }, [data, name]);

  useEffect(() => {
    if (filter === "Filter") return;

    let filterRows = data.filter((data) => {
      if (data.category.includes(filter)) return true;
      return false;
    });

    setRows(filterRows);
  }, [data, filter]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const redirectUser = (user) => {
    history.push(`/character/${user.char_id}`);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => {
                return (
                  <TableRow
                    key={key}
                    onClick={() => {
                      redirectUser(row);
                    }}
                    className={classes.row}
                  >
                    {columns.map((column, key) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CharacterTable;
