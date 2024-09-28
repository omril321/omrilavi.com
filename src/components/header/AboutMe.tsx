import { component$ } from "@builder.io/qwik";
import SocialButtons from "../socialButtons";
import MeImage from "./MeImage";
import { ABOUT_ME_DESCRIPTION } from "../../config/constants";

export default component$(() => {
  return (
    <div class="flex m-auto items-center justify-center">
      <div class="flex-shrink-0 rounded-full hidden sm:block w-32 overflow-hidden filter drop-shadow-2xl">
        <MeImage />
      </div>
      <div class="sm:ml-8">
        <h2 class="text-primary filter drop-shadow-md">
          Omri Lavi
          <span class="text-secondary-light border-secondary-light border-l-2 ml-2">
            {" "}
            Building Tools for Developers
          </span>
        </h2>
        <p class="text-secondary-light whitespace-pre-wrap text-lg font-semibold">{ABOUT_ME_DESCRIPTION}</p>
        <div class="flex flex-1 justify-center mb-4 sm:justify-start sm:mb-0">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
});
