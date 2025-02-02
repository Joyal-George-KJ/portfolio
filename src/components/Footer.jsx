import React from "react";

function Footer() {
    return (
        <div className="laptop:px-24 laptop:py-12 font-mono mobile:px-8 dark:bg-neutral-800 bg-neutral-200 shadow-black py-4 shadow dark:shadow-white flex flex-col backdrop-blur">
            <p className="font-medium dark:text-neutral-100 text-neutral-900 mobile:text-base laptop:text-xl pb-4 mobile:pb-2">
                Contact Me
            </p>
            <a
                className="dark:text-neutral-300 text-neutral-700 mobile:text-sm laptop:text-xl"
                href="mailto:joyalgeorgekj@gmail.com"
            >
                <span className="font-medium dark:text-neutral-300 text-neutral-700 pr-2">Email: </span>
                joyalgeorgekj@gmail.com
            </a>
            <a
                className="dark:text-neutral-300 text-neutral-700 mobile:text-sm laptop:text-xl"
                href="https://www.linkedin.com/in/joyalgeorgekj"
            >
                <span className="font-medium dark:text-neutral-300 text-neutral-700 pr-2">LinkedIn: </span>
                @joyalgeorgekj
            </a>
        </div>
    );
}

export default Footer;