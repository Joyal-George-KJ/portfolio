import * as React from "react";
import { useSelector } from "react-redux";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceTimeline() {
    const { experience } = useSelector((state) => state.data);
    return (
        <div className="font-mono text-lg py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    Experience
                </h1>

                <div className="flex mt-6">
                    <ul className="flex flex-col even:flex-col-reverse gap-4">
                        {experience
                            .slice()
                            .reverse()
                            .map((val, index) => (
                                <ExperienceCard title={val.title} year={val.year} event={val.event} key={index} />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
