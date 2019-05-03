import React from "react";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

function AuthPage(props) {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  } else {
    return props.children;
  }
}

export default AuthPage;
