import React from "react";

function Footer() {
    return (
            <div className="px-24 py-8 shadow shadow-white flex flex-col backdrop-blur">
                <p className="font-medium text-neutral-100 text-xl pb-4">Contact Me</p>
                <a
                    className="text-neutral-300"
                    href="mailto:joyalgeorgekj@gmail.com"
                >
                    <span className="font-medium text-neutral-300 pr-2">
                        Email: 
                    </span>
                    joyalgeorgekj@gmail.com
                </a>
                <a
                    className="text-neutral-300"
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
