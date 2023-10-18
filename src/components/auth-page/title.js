import React from "react";

export function Title(isLogin) {
  return <h2>{isLogin ? "Login" : "Register"}</h2>;
}
