import React, { useRef } from "react";
import "../index.css";
import useViewportCheck from "../hooks/useViewportCheck";

function ExperienceCard({year, title, event}) {
    const cardRef = useRef(null);
    const isVisible = useViewportCheck(cardRef);

    return (
        <li
            className={`grid grid-cols-1 flex-wrap-reverse justify-items-center relative mt-2 fadeIn ${isVisible ? "in-view" : ""}`}
            ref={cardRef}
        >
            <span
                className={`bg-blue-600 w-2 h-14 rounded-full px-3 py-[6px] text-neutral-200`}
            ></span>
            <div className="w-full text-center pt-2">
                <h4 className="dark:text-gray-300 text-gray-800">{year}</h4>
                <h4 className="dark:text-neutral-100 font-bold text-neutral-900">
                    {title}
                </h4>
                <p className="dark:text-gray-300 text-gray-800">{event}</p>
            </div>
        </li>
    );
}

export default ExperienceCard;
