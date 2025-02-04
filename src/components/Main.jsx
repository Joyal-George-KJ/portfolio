import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import { useSelector } from "react-redux";

function Main() {
    const {name, role, socials} = useSelector((state) => state.data);

    return (
        <div className="relative z-10 flex justify-center items-center flex-col min-h-[50svh] tablet:min-h-[88vh] px-6 tablet:px-16">
            <h1 className="text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl tv:text-6xl font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                {name}
            </h1>
            <h2 className="text-base tablet:text-xl laptop:text-2xl desktop:text-3xl tv:text-4xl font-mono font-medium text-neutral-600 dark:text-neutral-400 pt-3">
                - {role} -
            </h2>
            <Socials socialInfo={socials} />
        </div>
    );
}

export default Main;
