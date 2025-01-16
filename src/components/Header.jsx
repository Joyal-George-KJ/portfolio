import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="flex justify-between items-center font-mono bg-transparent backdrop-blur-md text-neutral-200 text-xl pl-8">
                <li className="cursor-pointer list-none"><Link to="/">Joyal George K J</Link></li>
                <ul className="flex justify-center items-center py-4 px-8 gap-8 text-xl bg-transparent backdrop-blur-md text-neutral-200">
                    <li className="cursor-pointer"><Link to="/blog">Blog</Link></li>
                    <li className="cursor-pointer"><Link to="/project">Project</Link></li>
                    <li className="cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="cursor-pointer">
                        <button>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
