import React from "react";
import blogImage from "../assets/img/blog-test-img.jpg";
import BlogCard from "../components/BlogCard";

function Blog() {
    return (
        <div className="min-h-[100vh]">
            <h3 className="mobile:px-8 font-mono laptop:px-24 mobile:text-lg laptop:text-3xl text-neutral-200 py-4">Blog</h3>
            <div className="blog-container text-neutral-200 font-mono grid mobile:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 gap-6 mobile:px-6 laptop:px-24">
                <BlogCard blogImage={blogImage} />
                <BlogCard blogImage={blogImage} />
            </div>
        </div>
    );
}

export default Blog;
