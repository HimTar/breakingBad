import React, { useState, useEffect } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import CharacterTable from "../CharacterTable/CharacterTable";

import axiosConfig from "../../Utils/axiosConfig";
import { getAllCharactersURL } from "../../Utils/Constants";

import styles from "./MainPage.module.css";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "40%",
    height: "4rem",
    borderRadius: "4px",
    background: "white",
    boxShadow: "0 0 10px 0 rgb(37, 37, 37)",
  },
}));

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("Filter");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    axiosConfig
      .get(getAllCharactersURL)
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchCont}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className={styles.input}
          placeholder="Search By Name..."
        />

        <Select
          value={filter}
          onChange={handleFilterChange}
          className={classes.input}
          label="Filter"
        >
          <MenuItem value="Filter">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Breaking Bad">Breaking Bad</MenuItem>
          <MenuItem value="Better Call Saul">Better Call Saul</MenuItem>
        </Select>
      </div>

      {loading ? (
        <CircularProgress style={{ color: "white", margin: "16rem auto" }} />
      ) : (
        <CharacterTable data={characters} filter={filter} name={name} />
      )}
    </div>
  );
};

export default MainPage;
