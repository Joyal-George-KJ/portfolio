import React from "react";

function Blog() {
    return (
        <div className="min-h-[100vh]">
            <h3 className="mobile:px-8 laptop:px-24 text-neutral-200 py-4">Blog</h3>
            <div className="blog-container text-neutral-200 font-mono flex gap-4 flex-col mobile:px-4 laptop:px-24">
                <div className="blog border shadow-neutral-300 flex flex-col gap-2 backdrop-blur-md shadow p-4 rounded-lg">
                    <h4 className="text-lg">Blog 1</h4>
                    <p className="line-clamp-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio molestias vero asperiores perspiciatis, quae in sit quas cumque qui provident?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
