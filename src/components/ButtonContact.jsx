import React from "react";
import InstagramLogo from "../assets/img/instagram.png";
import LinkedInLogo from "../assets/img/linkedin.png";
import TwitterLogo from "../assets/img/twitter.png";
import GitHubLogo from "../assets/img/github.png";
import WhatsappLogo from "../assets/img/whatsapp.png";
import EmailLogo from "../assets/img/email.png";

function ButtonContact() {
    return (
        <div className="flex gap-4 pt-8">
            <a href="https://www.instagram.com/_.i.m_fine_/" className="rounded-full bg-neutral-300">
                <img className="w-8" src={InstagramLogo} alt="Instagram Logo" />
            </a>
            <a href="https://www.linkedin.com/in/joyalgeorgekj/" className="rounded-full bg-neutral-300">
                <img className="w-8" src={LinkedInLogo} alt="LinkedIn Logo" />
            </a>
            <a href="https://github.com/Joyal-George-KJ" className="rounded-full bg-neutral-300">
                <img className="w-8" src={GitHubLogo} alt="GitHub Logo" />
            </a>
            <a href="https://x.com/JoyalGeorgeKJ" className="rounded-full bg-neutral-300">
                <img className="w-8" src={TwitterLogo} alt="Twitter Logo" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=918921223436&text=Hey" className="rounded-full bg-neutral-300">
                <img className="w-8" src={WhatsappLogo} alt="Whatsapp Logo" />
            </a>
            <a href="mailto:joyalgeorgekj@gmail.com" className="rounded-full bg-neutral-300">
                <img className="w-8" src={EmailLogo} alt="Email Logo" />
            </a>
        </div>
    );
}

export default ButtonContact;
