import { MetadataRoute } from "next";

interface BlogPostTypes {
  title: string;
  id: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const posts: BlogPostTypes[] = data.posts;

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
