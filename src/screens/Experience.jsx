import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function ExperienceTimeline() {
    const { experience } = useSelector((state) => state.data);
    return (
        <div className="font-mono text-lg py-8 min-h-screen mobile:px-6 laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="text-4xl font-bold dark:text-blue-400 text-blue-600 border-b-4 border-blue-600 dark:border-blue-500 pb-3">
                    Experience
                </h1>

                <Timeline position="alternate">
                    {experience.slice().reverse().map((val, index) => (
                        <TimelineItem className="" key={index}>
                            <TimelineOppositeContent color="secondary">
                                {val.year}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <i className={val.iconClass}></i>{" "}
                                    {/* Laptop Icon */}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant="h6"
                                    className="dark:text-neutral-100 font-bold text-neutral-900"
                                >
                                    {val.title}
                                </Typography>
                                <Typography className="dark:text-gray-300 text-gray-800">
                                    {val.event}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    );
}
