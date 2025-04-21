import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
// import remarkGfm from "remark-gfm";

function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

function BlogCard({ image, date, title, description, tags, id = undefined }) {
    date = formatDateToDDMMYYYY(date);

    return (
        <div className="dark:bg-gray-800 bg-gray-200 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={import.meta.env.VITE_STORE_URL + image}
                    className="w-full h-12 object-cover rounded-lg"
                    alt="blog img"
                />
            </div>

            <div className="mt-4">
                    <a
                        href={"/blog/" + id}
                        className="block text-gray-600 dark:text-gray-400"
                    >
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {date}
                        </span>
                        <h4 className="text-2xl font-semibold text-blue-400 mt-1">
                            {title}
                        </h4>
                        <Markdown>{description.slice(0, 100) + "..."}
                        </Markdown>
                    </a>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-700 px-3 py-1 text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
