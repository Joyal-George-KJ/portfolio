import React from "react";

function About() {
    return (
        <div className="text-neutral-200 font-mono text-lg py-4 min-h-[100vh] mobile:px-6 laptop:px-24">
            <h1>About</h1>
            <h3>Joyal George K J</h3>
            <p>
                React JS Developer who builds reusable components and hooks for
                performance and optimized sites. Passionate about learning new
                techs and building projects that solve real-world problems.
            </p>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 gap-4 laptop:w-2/5 mobile:w-full tablet:w-2/4 text-center backdrop-blur">
                    <span className="aspect-square hover:text-neutral-800 hover:bg-neutral-200 shadow-neutral-200 justify-center items-center flex shadow rounded ">
                        Web Development
                    </span>
                    <span className="aspect-square hover:text-neutral-800 hover:bg-neutral-200 shadow-neutral-200 justify-center items-center flex shadow rounded ">
                        Mobile App Development
                    </span>
                    <span className="aspect-square hover:text-neutral-800 hover:bg-neutral-200 shadow-neutral-200 justify-center items-center flex shadow rounded ">
                        Software Development
                    </span>
                    <span className="aspect-square hover:text-neutral-800 hover:bg-neutral-200 shadow-neutral-200 justify-center items-center flex shadow rounded ">
                        SEO Optimization
                    </span>
                </div>
            </div>
            <p>Tech Stack I use:</p>
            <div className="text-4xl flex gap-4 flex-wrap bg-neutral-200 p-4 rounded-lg shadow-neutral-200">
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-redux-original colored"></i>
                <i className="devicon-nextjs-original-wordmark colored"></i>
                <i className="devicon-tailwindcss-original colored"></i>
                <i className="devicon-github-original-wordmark colored"></i>
                <i className="devicon-npm-original-wordmark colored"></i>
                <i className="devicon-postman-plain colored"></i>
                <i className="devicon-sass-original colored"></i>
                <i className="devicon-vscode-plain colored"></i>
            </div>
        </div>
    );
}

export default About;
