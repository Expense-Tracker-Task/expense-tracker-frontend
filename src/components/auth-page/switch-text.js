import React from "react";

export function SwitchText(setIsLogin, isLogin) {
  return (
    <>
      {isLogin ? (
        <div style={{ width: "100%" }}>
          <p style={{ marginBottom: "0" }}>You don't have an account?</p>
          <p
            style={{
              marginTop: "0",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {" "}
            Sign up here!
          </p>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <p style={{ marginBottom: "0" }}>You have an account?</p>
          <p
            style={{
              marginTop: "0",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {" "}
            Login here!
          </p>
        </div>
      )}
    </>
  );
}
