import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div className="relative z-30">
            <nav className="flex justify-between items-center py-4 px-8 font-mono bg-transparent backdrop-blur-md text-neutral-200 mobile:text-base tablet:text-xl pl-8">
                <ul>
                    <li className="cursor-pointer list-none h-7 grid place-items-center">
                        <Link to="/" className="mobile:text-base tablet:text-xl">Joyal George K J</Link>
                    </li>
                </ul>

                <ul
                    className={`flex ${
                        !toggle
                            ? "justify-center"
                            : "flex-col absolute items-end right-0 p-4 pt-4 bg-neutral-800 py-12 top-0 h-screen mobile:w-3/4 laptop:w-full z-40"
                    } gap-8 laptop:text-xl backdrop-blur-md text-neutral-200`}
                >
                    <li>
                        <button
                            onClick={() => setToggle(!toggle)}
                            className={`${toggle && 'px-4'} cursor-pointer text-xl z-50`}
                            aria-label="Toggle Menu"
                        >
                            <i className={`bi bi-${!toggle ? "list" : "x-lg"}`}></i>
                        </button>
                    </li>
                    {toggle && (
                        <>
                            <li className="cursor-pointer px-2 w-max">
                                <Link onClick={() => setToggle(!toggle)} to="/blog">Blog</Link>
                            </li>
                            <li className="cursor-pointer px-2 w-max">
                                <Link onClick={() => setToggle(!toggle)} to="/project">Project</Link>
                            </li>
                            <li className="cursor-pointer px-2 w-max">
                                <Link onClick={() => setToggle(!toggle)} to="/about">About</Link>
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
