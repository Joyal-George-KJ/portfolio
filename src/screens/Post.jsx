import React from "react";
import { useParams } from "react-router-dom";
import useAppwrite from "../hooks/useAppwrite";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";


function Post() {
    const { id, path } = useParams();
    let { data, loading, error } = useAppwrite(
        path === "blog"
            ? import.meta.env.VITE_PERSONAL_BLOG_ID
            : import.meta.env.VITE_PERSONAL_PROJECT_ID,
        id
    );
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="font-mono text-lg laptop:py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <div className="blog-container mt-6 text-neutral-800 dark:text-neutral-200 font-mono grid grid-cols-1 gap-6">
                    {path === "blog" ? (
                        <BlogCard
                            {...data}
                            full={true}
                            markdownComponent={{
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
                                    <ul
                                        className="list-disc ml-6 mb-4"
                                        {...props}
                                    />
                                ),
                                ol: ({ node, ...props }) => (
                                    <ol
                                        className="list-decimal ml-6 mb-4"
                                        {...props}
                                    />
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
                        />
                    ) : (
                        <ProjectCard
                            id={data.$id}
                            name={data.name}
                            description={data.description}
                            image={data.image}
                            projectType={data.title}
                            techStack={data.tech_stacks_used}
                            codeLink={data.code_link}
                            visitLink={data.preview_link}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Post;
