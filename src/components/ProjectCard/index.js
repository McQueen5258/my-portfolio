import React from "react";
import "./styles.css";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <Image src={image} alt={title} width={500} height={500} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}