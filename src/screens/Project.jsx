import React from "react";
import ProjectCard from "../components/ProjectCard";
import useAppwrite from "../hooks/useAppwrite";
import CardLoader from "../components/CardLoader";

function Project() {
    const { data, loading, error } = useAppwrite(
        import.meta.env.VITE_PERSONAL_PROJECT_ID
    );

    if (error) return <p>Something went wrong.</p>;

    return (
        <div className="font-mono text-lg laptop:py-8 min-h-fit laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    Project
                </h1>
                <div className="grid laptop:grid-cols-1 tv:grid-cols-2 gap-4 mt-6">
                    {(loading || !data) &&
                        [...Array(2)].map((_, i) => <CardLoader key={i} />)}
                    {data?.map((val, ind) => (
                        <ProjectCard
                            index={ind + 1}
                            key={ind}
                            id={val.$id}
                            name={val.name}
                            description={val.description}
                            image={val.image}
                            projectType={val.title}
                            techStack={val.tech_stacks_used}
                            codeLink={val.code_link}
                            visitLink={val.preview_link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
