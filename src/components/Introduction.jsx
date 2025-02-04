import React from "react";

function Introduction() {
    
    return (
        <div className="bg-gray-900 text-neutral-100 p-8 md:p-16 lg:p-24 shadow-lg transition-transform transform hover:scale-[1.02] rounded-lg">
            <h3 className="text-xl md:text-3xl font-bold text-blue-400">Hey there! 👋</h3>
            <p className="text-sm md:text-2xl font-light mt-2">
                I'm <span className="font-semibold text-blue-300">Joyal George K J</span> from Kochi, Kerala, India.
            </p>
            <p className="text-sm md:text-2xl font-light mt-1">
                A passionate <span className="font-semibold text-blue-300">problem solver</span> and 
                <span className="font-semibold text-blue-300"> software developer</span>.
            </p>
            <p className="text-sm md:text-2xl font-light mt-1">
                I love <span className="font-semibold text-blue-300">building projects</span> and learning by doing. 
                Always exploring new technologies!
            </p>
        </div>
    );
}

export default Introduction;
