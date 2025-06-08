import React from "react";
import "./styles.css"; // ← 相对路径引入样式
import MyName from "./MyName";
import Divider from "../Divider";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-avatar" />

      <MyName />

      <Divider className={"hero-divider"} />
      <p className="hero-subtitle">
        Started learning programming at KidoLab in 2019 — now building
        real-world web and mobile apps.
      </p>

      <div className="tech-tags">
        <span>React</span>
        <span>React Native</span>
        <span>Redux</span>
        <span>Next.js</span>
      </div>

      <div className="hero-buttons">
        <a href="#portfolio">View Works</a>
        <a href="#contact">Contact Me</a>
      </div>
    </section>
  );
}
