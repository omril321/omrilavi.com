import { defineConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";
import { qwikRouter } from "@qwik.dev/router/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";

export default defineConfig(() => {
  return {
    plugins: [
      qwikRouter({
        mdxPlugins: {
          remarkGfm: true,
          rehypeSyntaxHighlight: true, // Use Qwik's built-in (cleanest!)
          rehypeAutolinkHeadings: true,
        },
      }),
      qwikVite(),
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
    ],
    resolve: {
      alias: {
        "~": join(__dirname, "src"),
      },
    },
    ssr: {
      noExternal: ["https", "crypto", "path"],
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
