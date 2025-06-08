import React from "react";
import "./styles.css"; // 确保你有对应的 CSS 文件来样式化组件
import ProjectCard from "../ProjectCard";

//   let items = [
//     {
//       link: 'https://mcqueen5258.github.io/2020works/Car-rental-website/',
//       img: 'image/workImage/CarRental.png',
//       name: t('CarRentalWebsite'),
//     },
//   ];

const projects = [
  {
    title: "Message Board",
    description:
      "Leave and view messages on a simple board built with React and Node.js.",
    image: "/images/workImage/messageBoard.png",
    link: "https://react-message-board.vercel.app/",
  },
  {
    title: "Cinema Ticket Booking",
    description:
      "A movie ticket purchasing website completed in collaboration with classmates.",
    image: "/images/workImage/cinemaTicket.png",
    link: "https://mcqueen5258.github.io/2020works/cinemaTicket",
  },
  {
    title: "Moments",
    description:
      "This is a personal homepage work that imitates the style of Instagram.",
    image: "/images/workImage/Moments.png",
    link: "https://mcqueen5258.github.io/2020works/Moments/",
  },
  {
    title: "KIDO BANK",
    description: "React A simple banking simulator where users can deposit “Kido Coins” and track total transactions.",
    image: "/images/workImage/KIDOBANK.png",
    link: "https://mcqueen5258.github.io/2020works/CN27/",
  },
  {
    title: "Flowers",
    description: "A 3D interactive visualization that showcases classmates’ SVG creations as petals of a flower, built with HTML/CSS and JavaScript.",
    image: "/images/workImage/flower.png",
    link: "https://mcqueen5258.github.io/flowers/",
  },
  {
    title: "Car Rental Website",
    description: "A rental car website project that allows users to sign up and explore driving options — built as a class assignment.",
    image: "/images/workImage/CarRental.png",
    link: "https://mcqueen5258.github.io/2020works/Car-rental-website/",
  },
  {
    title: "Assignment",
    description: "A student dashboard UI that includes analytics, messages, assignments, and more — designed for managing coursework and learning progress.",
    image: "/images/workImage/assignment.png",
    link: "https://mcqueen5258.github.io/examination/forOuYang/assignment/",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2>My work</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
