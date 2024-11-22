import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PostLink } from "~/components/postLink/PostLink";
import { WEBSITE_META_DESCRIPTION, WEBSITE_TITLE } from "~/config/constants";
import { usePostsMetadata } from "./layout";
import { ME_IMAGE_URL } from "~/components/header/MeImage";

export default component$(() => {
  const postsMetadata = usePostsMetadata();
  return (
    <>
      <div class="grid grid-cols-1 max-w-6xl sm:grid-cols-2 md:grid-cols-3">
        {postsMetadata.value.map((metadata) => (
          <PostLink key={metadata.url} {...metadata} />
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: WEBSITE_TITLE,
  meta: [
    {
      name: "description",
      content: WEBSITE_META_DESCRIPTION,
    },
    {
      name: "og:image",
      content: ME_IMAGE_URL,
    },
    {
      name: "robots",
      content: " index, nofollow",
    },
  ],
};
