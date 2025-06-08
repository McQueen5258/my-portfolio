import React from "react";
import "./styles.css"; // 相对路径引入样式

export default function Divider({ style, className }) {
  return (
    <hr
      className={`divider ${className || ""}`}
      style={{
        ...style,
      }}
    />
  );
}
