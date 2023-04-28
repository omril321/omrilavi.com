import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/Header";
import { routeLoader$ } from "@builder.io/qwik-city";
import { expandPostMetadata } from "~/services/postMetadataFetcher";
import { posts } from "../config/posts.json";
import "typeface-open-sans";

export default component$(() => {
  return (
    <div class="bg-bodyColor flex flex-col">
      <main class="mx-auto py-11 overflow-scroll">
        <Header />
        <Slot />
      </main>
    </div>
  );
});

export const usePostsMetadata = routeLoader$(async () => {
  const pagesMetadata = posts.map((post) => expandPostMetadata(post));
  const postsMetadata = await Promise.all(pagesMetadata);

  return postsMetadata;
});
