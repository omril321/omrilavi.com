import { component$ } from "@builder.io/qwik";
import type { JSXChildren } from "@builder.io/qwik";
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "./Icons";

const SBWrapper = ({ url, iconSvg, clazz }: { url: string; iconSvg: () => JSXChildren; clazz: string }) => (
  <a
    class={`${clazz} w-5 h-4 p-1 m-1 box-content transition-all text-white hover:text-primary`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="fill-current">{iconSvg()}</div>
  </a>
);

const SocialButtons = component$(() => (
  <>
    <SBWrapper url="https://github.com/omril321" iconSvg={GitHubIcon} clazz="border-github" />
    <SBWrapper url="https://linkedin.com/in/omri-lavi" iconSvg={LinkedInIcon} clazz="border-linkedin" />
    <SBWrapper url="https://dev.to/omril321" iconSvg={DevToIcon} clazz="border-devto" />
    <SBWrapper url="https://medium.com/@omril321" iconSvg={MediumIcon} clazz="border-medium" />
    <SBWrapper url="https://twitter.com/omril321" iconSvg={TwitterIcon} clazz="border-twitter" />
  </>
));

export default SocialButtons;
