import { component$ } from "@builder.io/qwik";
import AboutMe from "./AboutMe";

export default component$(() => {
  return (
    <header class="px-8 py-4 max-w-4xl sm:py-10 lg:pb-16">
      <AboutMe />
    </header>
  );
});
