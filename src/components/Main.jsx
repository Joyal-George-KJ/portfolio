import React from "react";
import Socials from "./Socials";

function Main() {
    return (
        <div
            className={`flex justify-center items-center flex-col mobile:min-h-[50svh] tablet:min-h-[88vh] px-32`}
        >
            <h1 className="mobile:text-xl w-max tablet:text-3xl laptop:text-4xl desktop:text-5xl tv:text-6xl font-mono font-semibold text-neutral-200">
                Joyal George K J
            </h1>
            <h2 className="mobile:text-base tablet:text-xl laptop:text-2xl desktop:text-3xl tv:text-4xl font-mono font-medium text-neutral-200 pt-4 w-max">
                - React JS Developer -
            </h2>
            <Socials />
        </div>
    );
}

export default Main;
