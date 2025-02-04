import React from "react";
import ButtonContact from "./ButtonContact";

function Socials({socialInfo}) {
    return (
        <div className="flex justify-center gap-4 py-6 relative z-5">
            {socialInfo.map((data, index) => (
                <ButtonContact key={index} {...data} />
            ))}
        </div>
    );
}

export default Socials;
