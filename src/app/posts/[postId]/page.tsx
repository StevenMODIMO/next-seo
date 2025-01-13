interface PostTypes {
  title: string;
  body: string;
  views: number;
  tags: string[];
}

interface BlogPostTypes {
  id: number;
}

type Params = Promise<{ postId: number }>;

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const posts: BlogPostTypes[] = data.posts;
  return posts.map((post) => ({
    params: { postId: post.id },
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const id = (await params).postId;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json();

  const { title, body }: PostTypes = data;

  return {
    title,
    description: body,
  };
}

export default async function Page({ params }: { params: Params }) {
  const id = (await params).postId;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json();

  const { title, body, views, tags }: PostTypes = data;
  return (
    <div className="mx-4 md:mx-32 lg:mx-96">
      <header className="font-bold text-lg py-2 sm:text-xl md:text-2xl">
        {title}
      </header>
      <p className="py-2 sm:text-lg">{body}</p>
      <p className="cursor-pointer bg-gray-300 p-1 w-fit rounded-md text-xs sm:text-sm">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          {views}{" "}
        </span>
        <span className="font-bold">views</span>
      </p>
      <ul className="flex gap-1 items-center pt-1 pb-3 font-bold">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-gray-300 rounded p-1 text-xs font-bold sm:text-sm"
          >
            <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
