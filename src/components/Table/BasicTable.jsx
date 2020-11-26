import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./Table.module.css";

const useStyles = makeStyles({
  container: {
    maxHeight: "70vh",
    overflowY: "scroll",
  },
  table: {
    minWidth: 650,
  },
  head: {
    borderRight: "1px solid #dfdfdf",
  },
  check: {
    width: 40,
  },
});

export default function BasicTable(props) {
  const [keys, setKeys] = useState(Object.keys(props.data[0]));
  const [active, setActive] = useState([])
  const [checkedAll, setCheckedAll] = useState(false)

  const classes = useStyles();

  const { data, isRadio, handleSelected } = props;

  useEffect(() => {
    setKeys(getKeys(data));
    setActive([])
    setCheckedAll(false)
  }, [data]);

  const getKeys = (data) => {
    return Object.keys(data[0]);
  };

  const checkboxChange = (e, id) => {  
    let newSelected = active

    if(e.target.checked) {
      newSelected.push(id)
    }
    else {
      newSelected = newSelected.filter(val => val !== id)
    }
    
    setActive([...newSelected])

    let info = newSelected.map(id => {
      return data[id]
    })

    if(handleSelected)
      handleSelected(info)
  }

  const radioChange = (e, id) => {

    let newID = active

    if(e.target.checked) {
      newID = [id];
    }
    else {
      newID=[]
    }

    setActive(newID)

    if(handleSelected) handleSelected([data[newID]])
  }

  const selectAll = (e) => {

    let newActive = []

    if(e.target.checked)  {
      setCheckedAll(true)      
      newActive = data.map((val, id) => {return id})
    } else{
      setCheckedAll(false)
    }

    setActive(newActive)

    let info = newActive.map(id => {
      return data[id]
    })

    if(handleSelected)
      handleSelected(info)
   
  }

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.check} align="center">
              {!isRadio && (
                <Checkbox onChange={selectAll} checked={checkedAll} />
              )}
            </TableCell>

            {keys.map((key, id) => {
              return (
                <TableCell className={classes.head} align="center" key={id}>
                  {key}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>          
          {data.map((val, id) => {
            return (
              <TableRow key={id} >
                <TableCell className={classes.check} align="center">
                  {isRadio ? (
                    <input
                      value={id}
                      checked={active.includes(id)}
                      name="radio"
                      type="radio"
                      onChange={(e) => radioChange(e, id)}
                    />
                  ) : (
                    <Checkbox checked={active.includes(id)} onChange={(e) => checkboxChange( e, id) } />
                  )}
                </TableCell>
                {keys.map((key, id) => {
                  return (
                    <TableCell align="center" key={id}>
                      {val[key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
