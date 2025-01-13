import { Suspense } from "react";
import Loading from "./loading";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <main className="mx-4">
      <h1 className="font-bold py-2 text-2xl sm:mx-40 md:mx-48">Blog Posts</h1>
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </main>
  );
}
