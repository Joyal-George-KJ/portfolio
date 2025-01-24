import React from "react";
function Project() {
    return (
        <div className="text-neutral-200 mobile:px-8 laptop:px-24 py-6">
            <h2 className="mobile:text-lg mobile:py-4 laptop:text-2xl laptop:pb-8 font-bold">
                Projects
            </h2>
            <div className="project-container">
                <div className="project-card shadow-sm shadow-neutral-300 p-4 rounded-lg backdrop-blur">
                    <div className="flex justify-between items-center">
                        <h3 className="laptop:text-xl mobile:text-base text-neutral-300">
                            01 | Test Project
                        </h3>
                        <a
                            href=""
                            className="laptop:w-8 mobile:w-6 aspect-square"
                            aria-label="GitHub Logo"
                        >
                            <i className="mobile:text-sm laptop:text-2xl text-neutral-100 bi bi-github"></i>
                        </a>
                    </div>
                    <div className="flex mobile:flex-col laptop:flex-row gap-4 pt-4">
                        <img
                            className="mobile:w-full min-h-[100%] laptop:w-2/4 rounded-lg object-fill"
                            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
                            alt=""
                        />
                        <div className="mobile:w-full laptop:w-2/5 flex gap-4 flex-col">
                            <p className="mobile:text-lg laptop:text-xl">
                                Description
                            </p>
                            <p className="w-full mobile:text-sm laptop:text-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam suscipit, eros vitae
                                tincidunt tincidunt, nunc libero ultricies
                            </p>
                            <div className="laptop:text-5xl mobile:text-xl flex gap-4 w-full flex-wrap">
                                <i className="devicon-html5-plain-wordmark colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-css3-plain-wordmark colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-git-plain-wordmark colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-react-original-wordmark colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-javascript-plain colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-tailwindcss-original colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                                <i className="devicon-redux-original colored w-max aspect-square border shadow hover:shadow-neutral-200 p-4 rounded-lg border-neutral-400"></i>
                            </div>
                            <a
                                href="www.joyalgeorgekj.com"
                                className="px-4 py-1 rounded-lg text-green-500 border border-green-500 w-fit"
                            >
                                Live Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
