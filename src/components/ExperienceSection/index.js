import React from "react";
import "./styles.css";

export default function ExperienceSection() {
  return (
    <section className="experience-section">
      <h2>经历</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <h3>前端实习生 - Runqian Jiayue Co.</h3>
          <p className="time">2020年3月 - 2020年6月</p>
          <p>参与企业后台管理系统开发，熟悉 React 页面结构与数据处理。</p>
        </div>
        <div className="experience-card">
          <h3>开发工程师 - H/A Studio</h3>
          <p className="time">2021年7月 - 2025年</p>
          <p>主导项目开发与维护，带领团队开发学习管理系统。</p>
        </div>
      </div>
    </section>
  );
}