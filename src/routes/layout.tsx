import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/Header";
import { routeLoader$ } from "@builder.io/qwik-city";
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
