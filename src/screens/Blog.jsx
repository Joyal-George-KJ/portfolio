import React from "react";
import blogImage from "../assets/img/blog-test-img.jpg";

function Blog() {
    return (
        <div className="min-h-[100vh]">
            <h3 className="mobile:px-8 laptop:px-24 text-neutral-200 py-4">Blog</h3>
            <div className="blog-container text-neutral-200 font-mono flex flex-col gap-4 mobile:px-4 laptop:px-24">
                <div className="blog border shadow-neutral-300 flex flex-row gap-2 backdrop-blur-md shadow p-4 rounded-lg">
                    <div className="">
                        <img src={blogImage} height={240} width={240} alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl">Blog 1</h4>
                        <p className="line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio molestias vero asperiores perspiciatis, quae in sit quas cumque qui provident?
                        </p>
                        <div>
                            //tags
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
