import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useSelector } from "react-redux";

function Project() {
    const { projects } = useSelector((state) => state.data);

    return (
        <div className="font-mono text-lg py-8 min-h-fit laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    Project
                </h1>
                <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-4 mt-6">
                    {projects.map((val, ind) => (
                        <ProjectCard
                            index={ind + 1}
                            key={ind}
                            name={val.name}
                            description={val.description}
                            image={
                                "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                            projectType={val.type}
                            techStack={val.techStack}
                            codeLink={val.codeLink}
                            visitLink={val.visitLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
