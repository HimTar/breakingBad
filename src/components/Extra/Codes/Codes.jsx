import React, { PureComponent } from "react";

import styles from "./Codes.module.css";

export default class Codes extends PureComponent {
  render() {
    return (
      <div className={styles.border}>
        <p className={styles.name}>{this.props.name} :</p>
        <p className={styles.code}>&nbsp;{this.props.code}</p>
      </div>
    );
  }
}
