import React from "react";
import { inputStyle } from "../../assets/styles";

export function Input(value, setValue, placeholder, isLogin, type = "text") {
  if (placeholder === "Email" && isLogin) return;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={inputStyle}
      required
    />
  );
}
