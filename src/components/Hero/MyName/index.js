"use client";
import React, { useEffect } from "react";
import "./styles.css"; // 相对路径引入样式
import Typed from "typed.js";

export default function MyName() {
  const el = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "UWIZEYE ERIC",
        "a Software Engineer",
        "a Photographer",
        "a Basketball Fan",
      ],
      typeSpeed: 100,
      startDelay: 500,
      loop: true,
      backSpeed: 50,
      backDelay: 1500,
      cursorChar: "▋",
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1 className="title">
      Hello I&#39;m <span className="name" ref={el} />
    </h1>
  );
}
