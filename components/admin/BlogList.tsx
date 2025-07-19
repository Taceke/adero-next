// components/admin/BlogList.tsx
"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BlogList() {
  const { data, error } = useSWR("/api/blogs", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog Admin</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog: any) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.subtitle}</td>
              <td>{new Date(blog.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
