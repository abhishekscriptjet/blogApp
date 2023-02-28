import React, { useContext } from "react";
import context from "../contextAPI/context";

export default function Alert() {
  const alertContext = useContext(context);
  const alert = alertContext.alert;

  const capitalize = (text) => {
    if (text === "danger") {
      text = "error";
    }
    let word = text.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="d-flex justify-content-center mx-5">
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show text-center h-100  px-4`}
          role="alert"
          style={{ fontSize: "15px", padding: "3px" }}
        >
          <strong>{capitalize(alert.type)}</strong> : {alert.msg}
        </div>
      )}
    </div>
  );
}
