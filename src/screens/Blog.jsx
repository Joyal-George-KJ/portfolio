import React from "react";
import BlogCard from "../components/BlogCard";
import useAppwrite from "../hooks/useAppwrite";
import BlogCardLoader from "../components/BlogCardLoader";

function Blog() {
    let { data, loading, error } = useAppwrite(
        import.meta.env.VITE_PERSONAL_BLOG_ID
    );

    console.log(data);

    if (error) return <p>Something went wrong.</p>;
    return (
        <div className="font-mono text-lg laptop:py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    Blog
                </h1>
                <div
                    className="blog-container mt-6 text-neutral-800 dark:text-neutral-200 font-mono grid mobile:grid-cols-1 laptop:grid-cols-2 tv:grid-cols-3 gap-6"
                >
                    {(loading || !data) &&
                        [...Array(1)].map((_, i) => <BlogCardLoader key={i} />)}
                    {data &&
                        data.map((val, ind) => (
                            <BlogCard
                                key={ind}
                                id={val.$id}
                                description={val.description}
                                tags={val.tags}
                                date={val.$createdAt}
                                title={val.title}
                                image={val.image}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
