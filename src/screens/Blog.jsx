import React from "react";
import blogImage from "../assets/img/blog-test-img.jpg";
import BlogCard from "../components/BlogCard";

function Blog() {
    return (
        <div className="text-neutral-200 font-mono text-lg py-4 min-h-[100vh] mobile:px-6 laptop:px-24">
            <h1 class="text-3xl font-bold text-blue-400 border-b-2 border-blue-500 pb-2">
                        Blog
                    </h1>
            <div className="blog-container mt-4 text-neutral-200 font-mono grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
                <BlogCard blogImage={blogImage} />
                <BlogCard blogImage={blogImage} />
                <BlogCard blogImage={blogImage} />
            </div>
        </div>
    );
}

export default Blog;
