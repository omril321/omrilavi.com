// don't forget to sync this with the manifest.json file
// Use PROFESSIONAL_INFO for consistency - keeping this for Qwik compatibility during migration
export const WEBSITE_TITLE = "Omri Lavi - Developer Tools and Client Architecture expert";
export const ABOUT_ME = {
  // this appears in the manifest as well
  description:
    "Experienced tech lead specializing in client-side architecture, testing frameworks, and tools that improve developer workflows and boost productivity.",
  short:
    "A Tech Lead at monday.com with over a decade of experience, specializing in developer tools, client architecture, and optimizing workflows to enhance developer velocity and confidence.",
  medium:
    "A Tech Lead at monday.com with over ten years of experience in software development. He specializes in building developer tools and optimizing client-side architecture to improve productivity and efficiency. With a strong background in testing and platform engineering, Omri has played a key role in shaping testing infrastructure and automating processes that drive development velocity. He frequently shares his expertise through technical publications and conference talks on topics such as TypeScript, ASTs, and frontend performance.",
  long: `A Tech Lead at monday.com with over a decade of experience, focusing on building tools and architecture that enhance developer productivity. He has worked extensively on client-side architecture, optimizing workflows, and creating solutions that improve both velocity and code quality. His role includes contributing to the architecture of the client, ensuring scalability and efficiency for developers.
  
Previously, Omri led the Testing Guild at monday.com, fostering best practices and building testing infrastructures that support quality across teams. He is an advocate for knowledge sharing, regularly speaking at internal and external conferences on advanced technologies, including TypeScript, AST manipulation, and testing frameworks. His work continues to influence how developers approach tooling, architecture, and developer productivity at scale.`,
};
export const WEBSITE_META_DESCRIPTION = ABOUT_ME.description;

export const GTAG = "G-HK4MP1TKW4";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/omri-lavi",
  github: "https://github.com/omril321",
  devto: "https://dev.to/omril321",
  medium: "https://medium.com/@omril321",
  twitter: "https://twitter.com/omril321",
};

export const PROFESSIONAL_INFO = {
  name: "Omri Lavi",
  jobTitle: "Tech Lead",
  company: "monday.com",
  tagline: "Building Tools for Developers",
  // Consistent site branding
  get fullTitle() {
    return `${this.name} - ${this.tagline}`;
  },
  // Twitter handle extracted from social links
  get twitterHandle() {
    return "@omril321";
  },
  // For Qwik compatibility during migration. To be removed after migration
  get qwikTitle() {
    return `${this.name} - Developer Tools and Client Architecture expert`;
  },
};
