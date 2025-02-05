import * as React from "react";
import { useSelector } from "react-redux";

export default function ExperienceTimeline() {
    const { experience } = useSelector((state) => state.data);
    return (
        <div className="font-mono text-lg py-8 min-h-screen mobile:px-6 laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="text-4xl font-bold dark:text-blue-400 text-blue-600 border-b-4 border-blue-600 dark:border-blue-500 pb-3">
                    Experience
                </h1>

                <div className="flex mt-6">
                    <ul className="flex flex-col even:flex-col-reverse gap-4">
                        {experience
                            .slice()
                            .reverse()
                            .map((val, index) => (
                                <li className="grid grid-cols-1 flex-wrap-reverse justify-items-center relative mt-2" key={index}>
                                    <span
                                        className={`bg-blue-600 w-2 h-14 rounded-full px-3 py-[6px] text-neutral-200`}
                                    ></span>
                                    <div className="w-full text-center pt-2">
                                        <h4 className="dark:text-gray-300 text-gray-800">
                                            {val.year}
                                        </h4>
                                        <h4 className="dark:text-neutral-100 font-bold text-neutral-900">
                                            {val.title}
                                        </h4>
                                        <p className="dark:text-gray-300 text-gray-800">
                                            {val.event}
                                        </p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
