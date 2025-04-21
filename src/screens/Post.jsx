import React from "react";
import { useParams } from "react-router-dom";
import useAppwrite from "../hooks/useAppwrite";
import Markdown from "react-markdown";

function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

function Post() {
    const { id } = useParams();
    let { data, loading, error } = useAppwrite(
        import.meta.env.VITE_PERSONAL_BLOG_ID,
        id
    );
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="loader"></div>
            </div>
        );
    }

    console.log(data);
    

    data.date = formatDateToDDMMYYYY(data?.$createdAt);

    return (
        <div className="font-mono text-lg laptop:py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    Blog
                </h1>
                <div
                    className="blog-container mt-6 text-neutral-800 dark:text-neutral-200 font-mono grid mobile:grid-cols-1 laptop:grid-cols-2 tv:grid-cols-3 gap-6"
                ></div>
        <div className="dark:bg-gray-800 bg-gray-200 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={import.meta.env.VITE_STORE_URL + data.image}
                    className="w-full h-12 object-cover rounded-lg"
                    alt="blog img"
                />
            </div>

            <div className="mt-4 dark:text-neutral-200 text-neutral-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                    {data.date}
                </span>
                <h4 className="text-2xl font-semibold text-blue-400 mt-1">
                    {data.title}
                </h4>
                <Markdown
                    components={{
                        h1: ({ node, ...props }) => (
                            <h1
                                className="text-3xl font-bold mt-6"
                                {...props}
                            />
                        ),
                        h2: ({ node, ...props }) => (
                            <h2
                                className="text-2xl font-semibold mt-4"
                                {...props}
                            />
                        ),
                        h3: ({ node, ...props }) => (
                            <h3
                                className="text-xl font-medium mt-3"
                                {...props}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="text-base mb-4" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc ml-6 mb-4" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal ml-6 mb-4" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote
                                className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-400"
                                {...props}
                            />
                        ),
                        code: ({ node, ...props }) => (
                            <code
                                className="bg-gray-100 dark:bg-gray-800 px-1 rounded"
                                {...props}
                            />
                        ),
                        pre: ({ node, ...props }) => (
                            <pre
                                className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm"
                                {...props}
                            />
                        ),
                        a: ({ node, ...props }) => (
                            <a
                                className="text-blue-600 hover:underline dark:text-blue-400"
                                {...props}
                            />
                        ),
                    }}
                >
                    {data.description}
                </Markdown>
                <div className="flex flex-wrap gap-2 mt-3">
                    {data.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-700 px-3 py-1 text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div></div></div>
    );
}

export default Post;
