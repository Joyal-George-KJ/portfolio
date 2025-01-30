import React from "react";
import Socials from "./Socials";

function Main() {
    return (
        <div className="relative z-10 flex justify-center items-center flex-col min-h-[50svh] tablet:min-h-[88vh] px-6 tablet:px-16">
            <h1 className="text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl tv:text-6xl font-mono font-semibold text-neutral-200">
                Joyal George K J
            </h1>
            <h2 className="text-base tablet:text-xl laptop:text-2xl desktop:text-3xl tv:text-4xl font-mono font-medium text-neutral-400 pt-3">
                - React JS Developer -
            </h2>
            <Socials />
        </div>
    );
}

export default Main;
