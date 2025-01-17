import React, { useState } from "react";
import InstagramLogo from "../assets/img/instagram.png";
import LinkedInLogo from "../assets/img/linkedin.png";
import TwitterLogo from "../assets/img/twitter.png";
import GitHubLogo from "../assets/img/github.png";
import WhatsappLogo from "../assets/img/whatsapp.png";
import EmailLogo from "../assets/img/email.png";

function ButtonContact({ url, displayName, hoverName }) {
    const [isHovered, setIsHovered] = useState("");
    function getImg(displayName) {
        switch (displayName) {
            case "Instagram":
                return InstagramLogo;
            case "LinkedIn":
                return LinkedInLogo;
            case "Twitter":
                return TwitterLogo;
            case "GitHub":
                return GitHubLogo;
            case "Whatsapp":
                return WhatsappLogo;
            case "Email":
                return EmailLogo;
            default:
                break;
        }
    }

    return (
        <a href={url} className="rounded-full flex justify-center mobile:w-6 laptop:w-8 aspect-square  shadow-neutral-100 shadow-md relative bg-neutral-300">
            <img
                className="object-cover rounded-full"
                onMouseEnter={(e) => setIsHovered(e.target.alt)}
                onMouseLeave={() => setIsHovered("")}
                src={getImg(displayName)}
                alt={displayName + " Logo"}
                />
            {isHovered?.indexOf(displayName) !== -1 && (
                <span 
                    onMouseEnter={(e) => setIsHovered(displayName)}
                    onMouseLeave={() => setIsHovered("")}
                    className="absolute rounded -left-3/5 z-30 top-12 px-2 py-1 w-max bg-neutral-200 text-neutral-900 font-bold text-sm">
                    {hoverName}
                </span>
            )}
        </a>
    );
}

export default ButtonContact;
