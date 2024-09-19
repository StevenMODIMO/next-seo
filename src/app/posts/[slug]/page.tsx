import type { Metadata } from "next";

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  posts: Posts[];
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: PostResponse = await response.json();

  return posts.map(({ id }) => id).slice(0, 5);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${params.slug}`);
  const { title, body }: Posts = await response.json();
  return {
    title,
    description: body,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.slug}`);
  const { title, body }: Posts = await response.json();
  return (
    <main className="w-[80%] mx-auto py-5">
      <article className="">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg">{body}</p>
      </article>
    </main>
  );
}
