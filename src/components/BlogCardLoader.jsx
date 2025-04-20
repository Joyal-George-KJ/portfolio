import React from "react";

const BlogCardLoader = () => {
    return (
        <div className="dark:bg-gray-800 bg-gray-200 p-5 rounded-2xl shadow-lg animate-pulse">
            <div className="overflow-hidden rounded-lg">
                <div className="w-full h-12 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            </div>

            <div className="mt-4 space-y-2">
                <div className="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="w-full h-16 bg-gray-300 dark:bg-gray-700 rounded" />

                <div className="flex flex-wrap gap-2 mt-3">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-transparent rounded-full"
                        >
                            &nbsp;
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCardLoader;