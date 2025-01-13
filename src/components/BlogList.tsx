import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostTypes {
  title: string;
  id: number;
}

export default async function BlogList() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  if (response.status == 404) {
    notFound();
  }

  const posts: BlogPostTypes[] = data.posts;

  return (
    <div className="flex flex-col gap-3 sm:mx-40 md:mx-48">
      {posts.map((post) => (
        <div key={post.id}>
          <Link className="font-bold" href={`/posts/${post.id}`}>
            {post.title.substring(0, 30)}...
          </Link>
        </div>
      ))}
    </div>
  );
}
