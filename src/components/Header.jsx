import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <div>
            <nav className="flex justify-between items-center py-4 px-8  font-mono bg-transparent backdrop-blur-md text-neutral-200 text-xl pl-8">
                <li className="cursor-pointer list-none">
                    <Link to="/">Joyal George K J</Link>
                </li>

                <ul
                    className={`flex items-center ${
                        !toggle
                            ? "justify-center"
                            : "flex-col absolute items-start right-3 top-4"
                    } gap-8 text-xl bg-transparent backdrop-blur-md text-neutral-200`}
                >
                    <button onClick={() => setToggle(!toggle)} className={`cursor-pointer ${toggle && "px-2 w-max"}`}> 
                        <i
                            className={`text-xl bi bi-${
                                !toggle ? "list" : "x-lg"
                            }`}
                        ></i>
                    </button>
                    {toggle && (
                        <>
                            <li className={`cursor-pointer ${toggle && "px-2 w-max"}`}>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className={`cursor-pointer ${toggle && "px-2 w-max"}`}>
                                <Link to="/project">Project</Link>
                            </li>
                            <li className={`cursor-pointer ${toggle && "px-2 w-max"}`}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={`cursor-pointer ${toggle && "px-2 w-max"}`}>
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
