import React from "react";

function BlogCard({ blogImage }) {
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    date = `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return (
        <div className="blog flex flex-col gap-2 backdrop-blur-md pb-4 mb-4">
            <div className="">
                <img
                    src={blogImage}
                    className="w-full aspect-square rounded-lg object-fill"
                    height={240}
                    width={240}
                    alt="blog img"
                />
            </div>
            <div className="flex flex-col gap-2">
                <a href="/blog/1">
                    <span className="date">{date}</span>
                    <h4 className="text-xl">Blog 1</h4>
                    <p className="line-clamp-2 text-neutral-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio molestias vero asperiores perspiciatis, quae
                        in sit quas cumque qui provident?
                    </p>
                </a>
                <div className="flex flex-wrap gap-2">
                    <span className="tags">blog</span>
                    <span className="tags">blog</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
