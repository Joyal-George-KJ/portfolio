import React, { useState } from "react";

function ButtonContact({ url, displayName, hoverName }) {
    const [isHovered, setIsHovered] = useState("");
    function getImg(displayName) {
        switch (displayName) {
            case "Instagram":
                return "instagram";
            case "LinkedIn":
                return 'linkedin';
            case "Twitter":
                return 'twitter-x';
            case "GitHub":
                return 'github';
            case "Whatsapp":
                return 'whatsapp';
            case "Email":
                return "envelope";
            default:
                break;
        }
    }

    return (
        <a
            href={url}
            target="_blank"
            aria-label={displayName}
            className="rounded-full flex justify-center mobile:w-6 items-center laptop:w-8 mobile:aspect-square relative z-5"
        >
            <i className={"mobile:text-sm laptop:text-2xl text-neutral-100 bi bi-" + getImg(displayName)}></i>
            {isHovered?.indexOf(displayName) !== -1 && (
                <span
                    onMouseEnter={() => setIsHovered(displayName)}
                    onMouseLeave={() => setIsHovered("")}
                    className="absolute rounded -left-3/5 top-12 px-2 py-1 w-max bg-neutral-200 text-neutral-900 font-bold text-sm z-10"
                >
                    {hoverName}
                </span>
            )}
        </a>
    );
}

export default ButtonContact;
