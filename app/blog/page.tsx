"use client";

import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  subtitle: string;
  coverImg: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data.blogs); // Assumes API returns { blogs: [...] }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark snap-always snap-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-4xl font-bold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Check out recent news and blogs from aderoTech. We post valuable
                blogs and articles so make sure to subscribe to our newsletters.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div className="w-full mb-10 border border-black rounded-xl hover:shadow-md">
                <div className="mb-8 overflow-hidden">
                  <img
                    src={blog.coverImg}
                    alt={blog.title}
                    className="w-full rounded-t-xl object-cover"
                  />
                </div>
                <div>
                  <span className="inline-block px-4 mx-2 py-1 mb-5 text-xs font-semibold leading-loose text-center text-primary rounded-full bg-cyan-200">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <h3>
                    <p className="inline-block mb-4 mx-2 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                      {blog.title}
                    </p>
                  </h3>
                  <p className="text-base mx-2 text-body-color dark:text-dark-6 mb-4">
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
