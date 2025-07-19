// lib/api.ts
export async function getBlogs() {
    const res = await fetch("http://localhost:3000/api/blogs");
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  }
  