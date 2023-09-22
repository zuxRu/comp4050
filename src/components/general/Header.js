import React from "react";
import styles from "./header.module.css";

export default function Header({ headerText }) {
  return <h1 className={styles.title}>{headerText}</h1>;
}
