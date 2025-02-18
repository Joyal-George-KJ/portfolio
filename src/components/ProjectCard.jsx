import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import stacks from "../constants/stacks";
import "../index.css";
import useViewportCheck from "../hooks/useViewportCheck";

function ProjectCard({
    index,
    name,
    description,
    image,
    projectType,
    visitLink,
    codeLink,
    techStack,
}) {
    const cardRef = useRef(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            ref={cardRef}
            className={`mt-6 h-fit fadeIn dark:bg-gray-800 bg-gray-200 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] ${
                isVisible ? "in-view" : ""
            }`}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-mono uppercase text-gray-700 dark:text-gray-300">
                    {index} | {projectType}
                </h3>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
                <img
                    className="w-full lg:w-full rounded-lg object-cover shadow-md"
                    src={image}
                    alt="Project Image"
                />

                <div className="w-full lg:w-full flex flex-col gap-4">
                    <p className="mobile: text-xl laptop:text-2xl font-mono text-blue-600 dark:text-blue-400 capitalize">
                        {name}
                    </p>
                    <p className="dark:text-gray-300 text-sm lg:text-base line-clamp-3">
                        {description}
                    </p>

                    <div className="text-3xl flex gap-4 flex-wrap">
                        {techStack.map((tech) => (
                            <i key={tech} className={`devicon-${stacks[tech]} colored`}></i>
                        ))}
                    </div>

                    <div className="flex w-full gap-4 pt-4">
                        <a href={codeLink} target="_blank" rel="noreferrer">
                            <Button
                                variant="outlined"
                                className="dark:text-white text-black border-gray-600 dark:border-gray-500 hover:border-blue-400"
                            >
                                View Code
                            </Button>
                        </a>
                        <a href={visitLink} target="_blank" rel="noreferrer">
                            <Button
                                variant="contained"
                                className="dark:bg-blue-500 hover:bg-blue-600"
                            >
                                View Site
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
