import React from "react";

function Introduction() {
    return (
        <div className="bg-gray-900 text-neutral-100 p-8 md:p-16 lg:p-24 shadow-lg transition-transform transform hover:scale-[1.02]">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400">Hey!</h3>
            <p className="text-sm md:text-2xl font-light mt-2">
                I am <span className="font-semibold text-blue-300">Joyal George K J</span> from Kochi, Kerala, India.
            </p>
            <p className="text-sm md:text-2xl font-light mt-1">
                I love solving problems and creating software solutions for them.
            </p>
        </div>
    );
}

export default Introduction;
