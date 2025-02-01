import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        setIsDarkMode(darkModeMediaQuery.matches);

        const listener = (e) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener("change", listener);

        return () => darkModeMediaQuery.removeEventListener("change", listener);
    }, []);

    return (
        <header className="relative z-30">
            <nav
                className={`flex justify-between items-center py-4 px-8 font-mono 
                ${
                    isDarkMode
                        ? "bg-gray-800 text-gray-100"
                        : "bg-gray-50 text-gray-900"
                }
                backdrop-blur-md mobile:text-base tablet:text-xl`}
            >
                {/* Logo / Home Link */}
                <ul>
                    <li className="cursor-pointer list-none h-7 grid place-items-center font-bold">
                        <Link
                            to="/"
                            className="hover:text-purple-500 transition duration-300"
                        >
                            Joyal George K J
                        </Link>
                    </li>
                </ul>

                {/* Desktop Navigation */}
                {toggle ? (
                    <div className="absolute top-0 right-0 h-screen w-3/4 bg-gray-800 text-gray-100 p-6 pt-16 flex flex-col gap-6 shadow-lg">
                        
                        <Link
                            onClick={() => setToggle(false)}
                            to="/blog"
                            className="hover:text-purple-500 transition"
                        >
                            Blog
                        </Link>
                        <Link
                            onClick={() => setToggle(false)}
                            to="/project"
                            className="hover:text-purple-500 transition"
                        >
                            Projects
                        </Link>
                        <Link
                            onClick={() => setToggle(false)}
                            to="/about"
                            className="hover:text-purple-500 transition"
                        >
                            About
                        </Link>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                            Login
                        </button>
                    </div>
                ) : (
                    <ul className="hidden laptop:flex items-center justify-center gap-8 text-lg">
                        <li className="cursor-pointer">
                            <Link
                                to="/blog"
                                className="hover:text-purple-500 transition duration-300"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="/project"
                                className="hover:text-purple-500 transition duration-300"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="/about"
                                className="hover:text-purple-500 transition duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                                Login
                            </button>
                        </li>
                        <li className="cursor-pointer">
                            <ThemeToggle />
                        </li>
                    </ul>
                )}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setToggle(!toggle)}
                    className="laptop:hidden text-2xl z-50 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <i className={`bi bi-${!toggle ? "list" : "x-lg"}`}></i>
                </button>

                {/* Mobile Menu */}
            </nav>
        </header>
    );
}

export default Header;
