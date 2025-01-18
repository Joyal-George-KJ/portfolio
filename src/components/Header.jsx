import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div className="z-30">
            <nav className="flex justify-between z-30 items-center py-4 px-8  font-mono bg-transparent backdrop-blur-md text-neutral-200 mobile:text-base tablet:text-xl pl-8">
                <li className="cursor-pointer list-none">
                    <Link to="/">Joyal George K J</Link>
                </li>

                <ul
                    className={`flex z-30 ${
                        !toggle
                            ? "justify-center"
                            : "flex-col absolute items-start right-0 p-4 z-30 bg-neutral-900 py-12 h-max top-0 left-0 bottom-0 w-full"
                    } gap-8 text-xl bg-transparent backdrop-blur-md text-neutral-200`}
                >
                    <button
                        onClick={() => setToggle(!toggle)}
                        className={`cursor-pointer ${toggle && "px-2 w-max"}`}
                    >
                        <i
                            className={`text-xl bi bi-${
                                !toggle ? "list" : "x-lg"
                            }`}
                        ></i>
                    </button>
                    {toggle && (
                        <>
                            <li
                                className={`cursor-pointer ${
                                    toggle && "px-2 w-max"
                                }`}
                            >
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    toggle && "px-2 w-max"
                                }`}
                            >
                                <Link to="/project">Project</Link>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    toggle && "px-2 w-max"
                                }`}
                            >
                                <Link to="/about">About</Link>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    toggle && "px-2 w-max"
                                }`}
                            >
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
