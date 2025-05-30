import React, { useState } from "react";

function ButtonContact({ name, handle, url }) {
    const [isHovered, setIsHovered] = useState("");
    function getImg(name) {
        switch (name) {
            case "Instagram":
                return "instagram";
            case "LinkedIn":
                return 'linkedin';
            case "Twitter":
                return 'twitter-x';
            case "GitHub":
                return 'github';
            case "WhatsApp":
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
            aria-label={name}
            className="rounded-full flex justify-center mobile:w-6 items-center laptop:w-8 mobile:aspect-square relative z-5"
            onMouseEnter={() => setIsHovered(name)}
            onMouseLeave={() => setIsHovered("")}
        >
            <i className={"mobile:text-sm laptop:text-2xl text-neutral-900 dark:text-neutral-100 bi bi-" + getImg(name)}></i>
            {isHovered?.indexOf(name) !== -1 && (
                <span
                    className="absolute rounded -left-3/5 top-12 px-2 py-1 w-max bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800 font-bold text-sm z-10"
                >
                    {handle}
                </span>
            )}
        </a>
    );
}

export default ButtonContact;
