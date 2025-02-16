import React from "react";
import blogImage from "../assets/img/blog-test-img.jpg";
import BlogCard from "../components/BlogCard";

function Blog() {
    return (
        
        <div className="font-mono text-lg py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">

            <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">Blog</h1>
            <div className="blog-container mt-6 text-neutral-200 font-mono grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                <BlogCard blogImage={blogImage} />
                <BlogCard blogImage={blogImage} />
                <BlogCard blogImage={blogImage} />
            </div>
            </div>
        </div>
    );
}

export default Blog;
