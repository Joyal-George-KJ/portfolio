import React from "react";

function Introduction() {
    return (
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-neutral-100 text-neutral-900 mobile:p-8 tablet:p-16 laptop:p-24 shadow-lg transition-transform transform hover:scale-[1.02]">
            <h3 className="text-xl md:text-3xl font-bold dark:text-blue-400 text-blue-600">
                Hey there! 👋
            </h3>
            <p className="text-sm md:text-2xl font-light mt-2">
                I'm{" "}
                <span className="font-semibold dark:text-blue-300 text-blue-700">
                    Joyal George K J
                </span>{" "}
                from Kochi, Kerala, India.
            </p>
            <p className="text-sm md:text-2xl font-light mt-1">
                A passionate{" "}
                <span className="font-semibold dark:text-blue-300 text-blue-700">
                    problem solver
                </span>{" "}
                and
                <span className="font-semibold dark:text-blue-300 text-blue-700">
                    {" "}
                    software developer
                </span>
                .
            </p>
            <p className="text-sm md:text-2xl font-light mt-1">
                I love{" "}
                <span className="font-semibold dark:text-blue-300 text-blue-700">
                    building projects
                </span>{" "}
                and learning by doing. Always exploring new technologies!
            </p>
        </div>
    );
}

export default Introduction;
