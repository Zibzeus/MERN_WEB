import React from "react";
import { Alert } from "react-bootstrap";
export default function MessageBox(props) {
  return (
    <Alert className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </Alert>
  );
}
