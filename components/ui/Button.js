import classes from "./Button.module.css";
import React from "react";
import Link from "next/link";

function Button({ link, children }) {
  return (
    <Link href={link}>
      <a classes={classes.btn}>{children}</a>
    </Link>
  );
}

export default Button;
