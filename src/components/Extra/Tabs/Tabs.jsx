import React from "react";

import styles from "./Tabs.module.css";

export default function Tabs(props) {
  const newClass = props.selected ? styles.selected : styles.tab;

  return (
    <div className={newClass} onClick={() => props.handleClicked(props.number)}>
      {props.data.tabName}
    </div>
  );
}
