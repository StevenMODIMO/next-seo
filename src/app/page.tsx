import Link from "next/link";

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  posts: Posts[];
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: PostResponse = await response.json();
  return (
    <div className="w-[80%] mx-auto">
      <header className="font-bold text-3xl">
        <h1>Posts</h1>
      </header>
      {posts.map(({ id, title }) => (
        <article key={title}>
          <h2>
            <Link href={`/posts/${id}`} className="text-lg font-semibold py-3">
              {title}
            </Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
