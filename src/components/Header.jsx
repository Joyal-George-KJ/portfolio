import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div className="relative z-30">
            <nav className="flex justify-between items-center py-4 px-8 font-mono bg-transparent backdrop-blur-md text-neutral-200 mobile:text-base tablet:text-xl pl-8">
                <li className="cursor-pointer list-none">
                    <Link to="/" className="mobile:text-base tablet:text-xl">Joyal George K J</Link>
                </li>

                <ul
                    className={`flex ${
                        !toggle
                            ? "justify-center"
                            : "flex-col absolute items-start right-0 p-4 h-max pt-4 bg-neutral-900 py-12 top-0 left-0 bottom-0 w-full z-40"
                    } gap-8 text-xl backdrop-blur-md text-neutral-200`}
                >
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="cursor-pointer px-2 text-xl z-50"
                    >
                        <i className={`bi bi-${!toggle ? "list" : "x-lg"}`}></i>
                    </button>
                    {toggle && (
                        <>
                            <li className="cursor-pointer px-2 w-max">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="cursor-pointer px-2 w-max">
                                <Link to="/project">Project</Link>
                            </li>
                            <li className="cursor-pointer px-2 w-max">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="cursor-pointer px-2 w-max">
                                <button>Login</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
