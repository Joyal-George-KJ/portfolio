import React from "react";

function About() {
    return (
        <div className="text-neutral-200 font-mono text-lg py-4 min-h-[100vh] mobile:px-6 laptop:px-24">
            <div className=" backdrop-blur">
                <div>
                    <h1 class="text-3xl font-bold text-blue-400 border-b-2 border-blue-500 pb-2">
                        About
                    </h1>

                    <div class="mt-4">
                        <h2 class="text-2xl font-semibold text-gray-100">
                            Joyal George K J 🚀
                        </h2>
                        <p class="text-gray-300 text-lg font-medium">
                            React.js Developer | Problem Solver | Future
                            Entrepreneur
                        </p>
                    </div>

                    <p class="mt-4 text-gray-200">
                        I’m a self-driven{" "}
                        <span class="text-blue-400 font-semibold">
                            React.js developer
                        </span>{" "}
                        passionate about building performant and scalable web
                        applications. My journey into development was
                        unconventional—I took on my first project without even
                        knowing the language, learning as I built a
                        <span class="text-blue-400 font-semibold">
                            {" "}
                            bachelor’s project for a friend
                        </span>
                        . Since then, I’ve completed numerous
                        <span class="text-blue-400 font-semibold">
                            {" "}
                            frontend challenges
                        </span>{" "}
                        on platforms like
                        <span class="text-blue-400">
                            {" "}
                            Frontend Mentor
                        </span> and <span class="text-blue-400">iCodeThis</span>
                        , and honed my problem-solving skills through{" "}
                        <span class="text-blue-400">HackerRank</span> and{" "}
                        <span class="text-blue-400">CodeWars</span>.
                    </p>

                    <p class="mt-4 text-neutral-200">
                        Even when faced with challenges—like working part-time
                        as a <span class="text-blue-400">fuel attendant</span>{" "}
                        after my laptop broke—I never let go of my goal to
                        become a <span class="text-blue-400">developer</span>. I
                        also participated in an
                        <span class="text-blue-400">
                            inter-university web development competition
                        </span>
                        , where I secured{" "}
                        <span class="font-bold text-green-400">1st place</span>.
                    </p>

                    <div class="mt-6">
                        <h3 class="text-xl font-semibold text-blue-400">
                            Skills
                        </h3>
                        <div className="text-4xl flex gap-4 flex-wrap justify-center p-4 rounded-lg shadow-neutral-200">
                            <i className="devicon-html5-plain-wordmark colored skill-icon"></i>
                            <i className="devicon-css3-plain-wordmark colored skill-icon"></i>
                            <i className="devicon-javascript-plain colored skill-icon"></i>
                            <i className="devicon-react-original-wordmark colored skill-icon"></i>
                            <i className="devicon-redux-original colored skill-icon"></i>
                            <i className="devicon-nextjs-original-wordmark colored skill-icon"></i>
                            <i className="devicon-tailwindcss-original colored skill-icon"></i>
                            <i className="devicon-github-original-wordmark colored skill-icon"></i>
                            <i className="devicon-npm-original-wordmark colored skill-icon"></i>
                            <i className="devicon-postman-plain colored skill-icon"></i>
                            <i className="devicon-sass-original colored skill-icon"></i>
                            <i className="devicon-vscode-plain colored skill-icon"></i>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-xl font-semibold text-blue-400">
                            Mission
                        </h3>
                        <p class="text-neutral-200 mt-2">
                            My ultimate goal is to{" "}
                            <span class="text-blue-400 font-semibold">
                                build a company
                            </span>{" "}
                            that{" "}
                            <span class="font-bold text-green-400">
                                prioritizes people over profit
                            </span>{" "}
                            and contributes to advancing civilization into the
                            <span class="text-blue-400">{" "}next stage</span>. I
                            believe technology should empower, not exploit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
