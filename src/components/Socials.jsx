import React from "react";
import ButtonContact from "./ButtonContact";

function Socials() {
    const socialInfos = [{
        displayName: "Instagram",
        hoverName: "@_.i.m_fine_",
        url: "https://www.instagram.com/_.i.m_fine_/",
    }, {
        displayName: "LinkedIn",
        hoverName: "@Joyal George K J",
        url: "https://www.linkedin.com/in/joyalgeorgekj/",
    }, {
        displayName: "GitHub",
        hoverName: "@Joyal-George-KJ",
        url: "https://github.com/Joyal-George-KJ",
    }, {
        displayName: "Twitter",
        hoverName: "@JoyalGeorgeKJ",
        url: "https://x.com/JoyalGeorgeKJ",
    }, {
        displayName: "Whatsapp",
        hoverName: "+91 8921223436",
        url: "https://api.whatsapp.com/send?phone=918921223436&text=Hey",
    }, {
        displayName: "Email",
        hoverName: "joyalgeorgekj@gmail.com",
        url: "mailto:joyalgeorgekj@gmail.com",
    }];

    return (
        <div className="flex gap-4 pt-8">
            {socialInfos.map((socialInfo, index) => (
                <ButtonContact key={index} {...socialInfo} />
            ))}
        </div>
    );
}

export default Socials;
