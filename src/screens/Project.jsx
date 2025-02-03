import { Button } from "@mui/material";
import React from "react";

function Project() {
    return (
        <div className="font-mono text-lg py-8 min-h-fit mobile:px-6 laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="text-4xl font-bold dark:text-blue-400 text-blue-600 border-b-4 dark:border-blue-500 pb-3">
                    Project
                </h1>

                <div className="mt-6 dark:bg-gray-800 bg-gray-200 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg lg:text-xl font-mono uppercase text-gray-700 dark:text-gray-300">
                            01 | Test Project
                        </h3>
                        <a
                            href=""
                            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-400 transition"
                            aria-label="GitHub"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <img
                            className="w-full lg:w-2/4 rounded-lg object-cover shadow-md"
                            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
                            alt="Project Image"
                        />

                        <div className="w-full lg:w-2/5 flex flex-col gap-4">
                            <p className="text-2xl font-mono text-blue-600 dark:text-blue-400 capitalize">
                                Name of the Project
                            </p>
                            <p className="dark:text-gray-300 text-sm lg:text-base line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam suscipit, eros vitae
                                tincidunt tincidunt.
                            </p>

                            <div className="text-3xl flex gap-4 flex-wrap">
                                <i className="devicon-html5-plain-wordmark colored"></i>
                                <i className="devicon-css3-plain-wordmark colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-react-original-wordmark colored"></i>
                                <i className="devicon-git-plain-wordmark colored"></i>
                                <i className="devicon-tailwindcss-original colored"></i>
                                <i className="devicon-redux-original colored"></i>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    variant="outlined"
                                    className="dark:text-white text-black border-gray-600 dark:border-gray-500 hover:border-blue-400"
                                >
                                    View Code
                                </Button>
                                <Button
                                    variant="contained"
                                    className="dark:bg-blue-500 hover:bg-blue-600"
                                >
                                    View Site
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
