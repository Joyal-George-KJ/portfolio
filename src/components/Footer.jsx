import React from "react";

function Footer() {
    return (
            <div className="laptop:px-24 laptop:py-12 font-mono mobile:px-8 bg-neutral-800 py-4 shadow shadow-white flex flex-col backdrop-blur">
                <p className="font-medium text-neutral-100 mobile:text-base laptop:text-xl pb-4 mobile:pb-2">Contact Me</p>
                <a
                    className="text-neutral-300 mobile:text-sm laptop:text-xl"
                    href="mailto:joyalgeorgekj@gmail.com"
                >
                    <span className="font-medium text-neutral-300 pr-2">
                        Email: 
                    </span>
                    joyalgeorgekj@gmail.com
                </a>
                <a
                    className="text-neutral-300 mobile:text-sm laptop:text-xl"
                    href="https://www.linkedin.com/in/joyalgeorgekj"
                >
                    <span className="font-medium text-neutral-300 pr-2">
                        Instagram: 
                    </span>
                    @_.i.m_fine_
                </a>
            </div>
    );
}

export default Footer;
