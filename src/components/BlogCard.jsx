import React from "react";

function BlogCard({ blogImage }) {
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    date = `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
        <div className="bg-neutral-800 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={blogImage}
                    className="w-full h-52 object-cover rounded-lg"
                    alt="blog img"
                />
            </div>

            <div className="mt-4">
                <a href="/blog/1" className="block">
                    <span className="text-sm text-gray-400">{date}</span>
                    <h4 className="text-2xl font-semibold text-blue-400 mt-1">Blog 1</h4>
                    <p className="mt-2 text-gray-300 text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                        molestias vero asperiores perspiciatis, quae in sit quas cumque qui provident?
                    </p>
                </a>
                <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">blog</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">web dev</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
