import React from "react";
// import "./styles.css";

export default function EducationSection() {
  return (
    <section className="education-section">
      <h2>教育背景</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <h3>北京XX中学</h3>
          <p className="time">2017年 - 2020年</p>
          <p>完成高中课程，兴趣广泛，热爱编程。</p>
        </div>
        <div className="experience-card">
          <h3>加拿大 XX 学院（在读）</h3>
          <p className="time">2024年 - 至今</p>
          <p>主修软件开发，课程涵盖 Web、移动端、算法等内容。</p>
        </div>
      </div>
    </section>
  );
}
