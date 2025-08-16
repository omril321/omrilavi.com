import { component$ } from "@qwik.dev/core";
import type { JSXChildren } from "@qwik.dev/core";
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "./Icons";

const SBWrapper = ({
  url,
  iconSvg,
  clazz,
  label,
}: {
  url: string;
  iconSvg: () => JSXChildren;
  clazz: string;
  label: string;
}) => (
  <a
    class={`${clazz} w-5 h-4 p-1 m-1 box-content transition-all text-white hover:text-primary`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <div class="fill-current">{iconSvg()}</div>
  </a>
);

const SocialButtons = component$(() => (
  <>
    <SBWrapper
      url="https://linkedin.com/in/omri-lavi"
      iconSvg={LinkedInIcon}
      clazz="border-linkedin"
      label={"Linkedin account"}
    />
    <SBWrapper url="https://github.com/omril321" iconSvg={GitHubIcon} clazz="border-github" label={"GitHub account"} />
    <SBWrapper url="https://dev.to/omril321" iconSvg={DevToIcon} clazz="border-devto" label={"Dev.To account"} />
    <SBWrapper url="https://medium.com/@omril321" iconSvg={MediumIcon} clazz="border-medium" label={"Medium account"} />
    <SBWrapper
      url="https://twitter.com/omril321"
      iconSvg={TwitterIcon}
      clazz="border-twitter"
      label={"Twitter account"}
    />
  </>
));

export default SocialButtons;
