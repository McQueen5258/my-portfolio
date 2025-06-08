import React from "react";
import "./styles.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineItemClasses,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const timelineData = [
  {
    type: "work",
    title: "Freelance Developer / Founder",
    company: "Self-employed | Entrepreneur",
    time: "2025 – Present",
    logo: null,
    points: [
      "Helped clients build responsive websites and mobile apps.",
      "Focused on UX/UI design, performance, and usability.",
      "Built projects using React, React Native, and Node.js.",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "H/A Studio | Full-time",
    time: "July 2021 – 2025",
    logo: '/images/timelineImage/HAStudio.jpg',
    points: [
      "Started with building static sites using React.",
      "Led development of academy management system.",
      "Began learning and applying React Native in real projects.",
      "Collaborated with designers and backend team.",
    ],
  },
  {
    type: "work",
    title: "Frontend Intern",
    company: "Runqian Jiayue Company | Internship",
    time: "2020",
    logo: '/images/timelineImage/Runqian.png',
    points: [
      "Worked on frontend components for internal tools.",
      "Learned team collaboration and agile basics.",
    ],
  },
  //   {
  //     type: "edu",
  //     title: "Software Development (In Progress)",
  //     company: "某加拿大学院",
  //     time: "2024 – Present",
  //     logo: "/images/school-canada.png",
  //     points: [
  //       "Studying frontend, backend, and mobile app development.",
  //       "Exploring cloud, deployment, and DevOps practices.",
  //     ],
  //   },
  {
    type: "edu",
    title: "Programming Certificate",
    company: "Guangzhou Kidolab School",
    time: "Mar 2019 – Jan 2022",
    logo: "/images/timelineImage/KIDOLAB.JPG",
    points: [
      "Learned HTML, CSS, JS, jQuery, ReactJS, React Native.",
      "Used freeCodeCamp and Code Notion to self-learn.",
      "Built multiple projects including a movie ticket website.",
      "Led photography and school basketball team.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">EXPERIENCE & EDUCATION</h2>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ display: "none" }} />
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                color={item.type === "work" ? "primary" : "secondary"}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.company}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <KeyboardDoubleArrowUpIcon style={{ fontSize: "20px" }} />
                )}
              </TimelineDot>
              {index < timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="span">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {item.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.company}
                </Typography>
                <ul style={{ margin: "0.5em 0 0 1em", padding: 0 }}>
                  {item.points.map((point, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{point}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
