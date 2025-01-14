import React from "react";

function Header() {
    return (
        <div>
            <nav className="flex justify-between items-center font-mono bg-transparent backdrop-blur-md text-neutral-200 text-xl pl-8">
                <li className="cursor-pointer list-none">Joyal George K J</li>
                <ul className="flex justify-center items-center py-4 px-8 gap-8 text-xl bg-transparent backdrop-blur-md text-neutral-200">
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Project</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">
                        <button>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
