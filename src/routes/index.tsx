import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { PostLink } from "~/components/postLink/PostLink";
import { WEBSITE_META_DESCRIPTION, WEBSITE_TITLE } from "~/config/constants";
import { usePostsMetadata } from "./layout";
import { ME_IMAGE_URL } from "~/components/header/MeImage";

export default component$(() => {
  const postsMetadata = usePostsMetadata();
  return (
    <div class="grid grid-cols-1 max-w-6xl sm:grid-cols-2 md:grid-cols-3">
      {postsMetadata.value.map((metadata) => (
        <PostLink key={metadata.url} {...metadata} />
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: WEBSITE_TITLE,
  meta: [
    {
      name: "og:title",
      content: WEBSITE_TITLE,
    },
    {
      name: "twitter:title",
      content: WEBSITE_TITLE,
    },
    {
      name: "description",
      content: WEBSITE_META_DESCRIPTION,
    },
    {
      name: "og:description",
      content: WEBSITE_META_DESCRIPTION,
    },
    {
      name: "twitter:description",
      content: WEBSITE_META_DESCRIPTION,
    },
    {
      name: "og:url",
      content: "https://omrilavi.com/",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:image",
      content: ME_IMAGE_URL,
    },
    {
      name: "twitter:image",
      content: ME_IMAGE_URL,
    },
    {
      name: "author",
      content: "Omri Lavi",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
};
