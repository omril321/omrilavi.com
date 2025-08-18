import { component$, useSignal, $ } from "@builder.io/qwik";
import SocialButtons from "../socialButtons";
import MeImage from "./MeImage";
import { ABOUT_ME, PROFESSIONAL_INFO } from "../../config/constants";

export default component$(() => {
  const description = useSignal(ABOUT_ME.short);

  const nextMore = description.value === ABOUT_ME.short ? ABOUT_ME.medium : ABOUT_ME.long;
  const hasMore = nextMore !== description.value;
  const nextLess = description.value === ABOUT_ME.long ? ABOUT_ME.medium : ABOUT_ME.short;
  const hasLess = nextLess !== description.value;

  const showDescription = (newDescription: string, eventLabel: string) =>
    $(() => {
      description.value = newDescription;
      gtag?.("event", "click", {
        event_category: "about_me",
        event_label: eventLabel,
      });
    });

  return (
    <div class="flex m-auto items-start justify-center">
      <div class="flex-shrink-0 flex-start rounded-full hidden sm:block w-32 overflow-hidden filter drop-shadow-2xl">
        <MeImage />
      </div>
      <div class="sm:ml-8">
        <h1 class="text-primary filter drop-shadow-md">
          {PROFESSIONAL_INFO.name}
          <span class="text-secondary-light border-secondary-light border-l-2 ml-2"> {PROFESSIONAL_INFO.tagline}</span>
        </h1>
        <p aria-label="description" class="text-secondary-light whitespace-pre-wrap text-lg font-semibold">
          {description}
        </p>
        <span class="flex gap-x-3">
          {hasLess && (
            <button
              class="text-secondary-light text-sm bg-primary-dark px-2 py-1 rounded whitespace-pre-wrap hover:bg-primary transition-colors"
              aria-label="Time to Breathe"
              onClick$={showDescription(nextLess, "show_less")}
            >
              😮‍💨{"   "}Time to Breathe
            </button>
          )}
          {hasMore && (
            <button
              class="text-secondary-light text-sm bg-primary-dark px-2 py-1 rounded whitespace-pre-wrap hover:bg-primary transition-colors"
              aria-label="Go Deeper"
              onClick$={showDescription(nextMore, "show_more")}
            >
              🤿{"   "}Go Deeper
            </button>
          )}
        </span>
        <div class="flex flex-1 justify-center mt-3 mb-4 sm:justify-start sm:mb-0">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
});
