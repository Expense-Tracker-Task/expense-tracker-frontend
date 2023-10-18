import React from "react";
import { buttonStyle } from "../../assets/styles";

export function Button(isLogin, handleLogin) {
  return (
    <>
      {isLogin ? (
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      ) : (
        <button onClick={handleLogin} style={buttonStyle}>
          Register
        </button>
      )}
    </>
  );
}
