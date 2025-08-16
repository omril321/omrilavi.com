import { component$, Slot } from "@qwik.dev/core";
import Header from "~/components/header/Header";
import { routeLoader$ } from "@qwik.dev/router";
import { posts } from "../config/posts";
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
  return posts;
});
