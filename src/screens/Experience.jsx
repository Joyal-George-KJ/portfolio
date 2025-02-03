import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function ExperienceTimeline() {
    return (
        <div className="font-mono text-lg py-8 min-h-screen mobile:px-6 laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="text-4xl font-bold dark:text-blue-400 text-blue-600 border-b-4 dark:border-blue-500 pb-3">
                    Experience
                </h1>

                <Timeline position="alternate">
                    {/* 8th Grade - Tech Curiosity Begins */}
                    <TimelineItem className="">
                        <TimelineOppositeContent color="secondary">
                            8th Standard
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <i className="bi bi-laptop"></i>{" "}
                                {/* Laptop Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Tech Curiosity Begins
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Explored Termux, phishing tools, and network
                                scanning.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* 10th Standard - Introduction to Computers */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            10th Standard
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <i className="bi bi-pc-display"></i>{" "}
                                {/* Computer Display Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Basic Computer Knowledge
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Learned how to operate a computer but spent more
                                time playing games in internet cafés.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* 11th & 12th - First Programming Experience */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            11th - 12th Standard
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <i className="bi bi-code-slash"></i>{" "}
                                {/* Coding Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                First Coding Experience
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Discovered programming through HTML, CSS, and
                                simple terminal calculators.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Bachelor's - Deep Dive into Development */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            Bachelor's in Computer Applications
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <i className="bi bi-file-code"></i>{" "}
                                {/* File Code Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Diving Deeper into Tech
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Learned Java, PHP, Python, and built
                                mini-projects.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Tech Fest Achievement */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            College Tech Fest
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <i className="bi bi-trophy"></i>{" "}
                                {/* Trophy Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                1st Prize in Tech Fest
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Won first place in a web development competition
                                at Cochin College.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Freelance & Learning */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            Freelance & Self-Learning
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <i className="bi bi-lightbulb"></i>{" "}
                                {/* Learning Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Built a Bachelor's Project
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Created a full project without knowing the
                                language, learning while building.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Web Challenges */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            Web Development Challenges
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <i className="bi bi-hammer"></i>{" "}
                                {/* Tools Icon */}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Frontend Challenges & Problem Solving
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Completed challenges on Frontend Mentor &
                                iCodeThis. Solved problems on HackerRank &
                                CodeWars.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Current Status - Fuel Attendant */}
                    <TimelineItem>
                        <TimelineOppositeContent color="secondary">
                            Present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="error">
                                <i className="bi bi-fuel-pump"></i>{" "}
                                {/* Fuel Pump Icon */}
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" className="dark:text-neutral-100 font-bold text-neutral-900">
                                Working as a Fuel Attendant
                            </Typography>
                            <Typography className="dark:text-gray-300 text-gray-800">
                                Saving up for a new laptop to continue my
                                journey as a developer.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}
