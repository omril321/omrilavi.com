export type PostMetadata = {
  url: string;
  title: string;
  description: string;
  image: string;
  publishDate: string;
};

export const posts: PostMetadata[] = [
  {
    url: "https://dev.to/omril321/growing-as-a-technical-leader-lessons-from-the-book-staff-engineer-4dod",
    title: "Growing as a Technical Leader: Lessons from the Book Staff Engineer",
    publishDate: "Feb 1, 2025",
    description:
      "Exploring key lessons from Will Larson's 'Staff Engineer,' this article delves into the four archetypes of Staff+ Engineers and strategies for impactful technical leadership.",
    image:
      "https://media2.dev.to/dynamic/image/width=500,height=210,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhu5uh0exng5yoa9pkajy.png",
  },
  {
    url: "https://engineering.monday.com/testkit-mastery-part-5-key-takeaways-and-lessons-learned-for-building-better-testkits/",
    title: "Testkit Mastery, Part 5: Key Takeaways and Lessons Learned for Building Better Testkits",
    description:
      "Reflecting on building testkits for complex libraries, this article shares key takeaways and lessons learned to enhance testing workflows and create developer-friendly tools.",
    image:
      "https://engineering.monday.com/wp-content/uploads/2025/01/Key-Takeaways-and-Lessons-Learned-for-Building-Better-Testkits-1024x512.png",
    publishDate: "Mar 14, 2025",
  },
  {
    url: "https://engineering.monday.com/testkit-mastery-part-4-design-for-easy-integration-into-testing-environments/",
    title: "Testkit Mastery, Part 4: Design for Easy Integration into Testing Environments",
    description:
      "This article explores strategies for seamlessly integrating testkits into environments like Vitest and Storybook, ensuring minimal setup and a consistent developer experience.",
    image:
      "https://engineering.monday.com/wp-content/uploads/2025/01/Seamlessly-Integrating-a-Testkit-into-Testing-and-Storybook-Environment-1024x512.png",
    publishDate: "Feb 28, 2025",
  },
  {
    url: "https://engineering.monday.com/testkit-mastery-part-3-building-the-core-structure-of-a-flexible-and-reliable-testkit/",
    title: "Testkit Mastery, Part 3: Building the Core Structure of a Flexible and Reliable Testkit",
    description:
      "Delving into the implementation of core components, this article discusses balancing flexibility and accuracy to create a robust testkit for complex libraries.",
    image:
      "https://engineering.monday.com/wp-content/uploads/2025/01/How-to-Build-the-Core-Structure-of-a-Flexible-and-Reliable-Testkit-1024x512.png",
    publishDate: "Feb 21, 2025",
  },
  {
    url: "https://engineering.monday.com/testkit-mastery-part-2-designing-a-developer-friendly-testkit/",
    title: "Testkit Mastery, Part 2: Designing a Developer-Friendly Testkit",
    description:
      "This article walks through prototyping a testkit API, focusing on key requirements for usability, flexibility, and seamless TypeScript integration.",
    image:
      "https://engineering.monday.com/wp-content/uploads/2025/01/Designing-a-Developer-Friendly-Testkit_-Prototyping-and-Defining-Requirement-1024x512.png",
    publishDate: "Feb 14, 2025",
  },
  {
    url: "https://engineering.monday.com/how-typescripts-compiler-helped-us-prevent-redux-performance-issues/",
    title: "How TypeScript’s Compiler Helped Us Prevent Redux Performance Issues",
    publishDate: "Jan 25, 2025",
    description:
      "Discover how we built a TypeScript tool to test and optimize selectors, improving performance by ensuring consistent references for identical inputs.",
    image:
      "https://engineering.monday.com/wp-content/uploads/2025/01/How-TypeScripts-Compiler-Helped-Us-Prevent-Redux-Performance-1024x512.png",
  },
  {
    url: "https://gitnation.com/contents/the-superpower-of-asts-how-we-saved-16percent-on-our-bundle-size",
    title: "Omri Lavi @ React Day Berlin 24` | The Superpower of ASTs: How We Saved 16% on Our Bundle Size",
    publishDate: "Dec 16, 2024",
    description:
      "Omri's talk at React Day Berlin 24` about the superpower of ASTs and how we saved 16% on our bundle size",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQFDB984r4TY4A/feedshare-shrink_800/B4DZPWDhqjHMAk-/0/1734463072464?e=2147483647&v=beta&t=HBG3JELQ0vgba4trztn7HtSaiZCWQnKWsw0-gQCDAoM",
  },
  {
    url: "https://www.youtube.com/watch?v=DobKkCDjZRM",
    title: "Omri Lavi @ ReactNext 24` | The Superpower of ASTs: How We Saved 16% on Our Bundle Size",
    publishDate: "Aug 7, 2024",
    description: "Omri's talk at ReactNext 24` about the superpower of ASTs and how we saved 16% on our bundle size",
    image: "https://i.ytimg.com/vi/DobKkCDjZRM/hqdefault.jpg",
  },
  {
    url: "https://engineering.monday.com/keeping-your-data-fresh-optimizing-live-updates-with-websockets/",
    title: "Keeping Your Data Fresh: Optimizing Live Updates with WebSockets",
    publishDate: "2023-06-04T08:34:53+00:00",
    description: "Learn how we optimized live updates with WebSockets to keep your data fresh.",
    image: "https://engineering.monday.com/wp-content/uploads/2023/06/Control_Yellow-1024x512.jpg",
  },
  {
    url: "https://engineering.monday.com/the-superpower-of-babel-how-we-saved-16-on-our-bundle-size/",
    title: "The Superpower of Babel: How We Saved 16% on Our Bundle Size",
    publishDate: "2023-03-19T08:34:53+00:00",
    description:
      "Discover new web optimization techniques with our custom Babel loader that decreased our bundle sizes by up to 16%.",
    image: "https://engineering.monday.com/wp-content/uploads/2023/03/Tree-shaking-1024x512.png",
  },
  {
    url: "https://www.testim.io/blog/typescript-skiplibcheck/",
    title: "Understanding TypeScript’s skipLibCheck Once and For All",
    description: "Read about the behavior and usages of the skipLibCheck option, and understand when to use it.",
    publishDate: "2021-08-25",
    image:
      "https://www.testim.io/wp-content/uploads/2021/08/Understanding-TypeScripts-skipLibCheck-Once-and-For-All@2x.png",
  },
  {
    url: "https://dev.to/omril321/developing-self-compassion-an-answer-to-the-constant-burnout-35e1",
    title: "Developing Self Compassion: An Answer to the Constant Burnout",
    description:
      "Are you generally stressed about your value as a developer? Feeling like you’re just not enough? This post is for you.",
    image:
      "https://media2.dev.to/dynamic/image/width=500,height=210,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpzxms95r4ohe1a75acff.png",
    publishDate: "Jul 16, 2021",
  },
  {
    url: "https://dev.to/omril321/better-error-messages-in-typescript-4-2-smarter-type-alias-preservation-3j7",
    title: "Better Error Messages in TypeScript 4.2 - Smarter Type Alias Preservation",
    description:
      "Smarter Type Alias Preservation makes TypeScript “remember” which union-types are being used while displaying the error messages.",
    image:
      "https://media2.dev.to/dynamic/image/width=500,height=210,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffy0rld7utq2k67npfa8f.png",
    publishDate: "Feb 28, 2021",
  },
  {
    url: "https://dev.to/omril321/git-metric-solving-the-pain-of-measuring-a-project-migration-413j",
    title: "Git Metric - Solving the Pain of Measuring a Project Migration",
    description: "With Git Metric you can quickly analyze git repository’s history within minutes.",
    publishDate: "Feb 14, 2021",
    image:
      "https://media2.dev.to/cdn-cgi/image/width=400%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fh3f22fk6mmiwufqjn3ef.png",
  },
  {
    url: "https://www.testim.io/blog/writing-your-first-custom-stylelint-rule/",
    title: "Writing Your First Custom Stylelint Rule",
    description:
      "Quickly create and integrate your own stylelint rules, to keep a higher level of code quality while respecting your project's requirements.",
    image:
      "https://www.testim.io/wp-content/uploads/2020/09/Testim-blog-post-_Writing-your-first-custom-stylelint-rule572_450-@2x.jpg",
    publishDate: " September 18, 2020",
  },
  {
    url: "https://engineering.innovid.com/3-considerations-for-your-next-utility-function-refactor-static-vs-dependency-injected-e966d385bd27",
    title: "3 Considerations for Your Next Utility Function Refactor — Static vs. Dependency Injected",
    description: "Choosing between static and a dependency injected utility function",
    image: "https://miro.medium.com/v2/resize:fit:400/0*QXTA-1khLYzcQRAj",
    publishDate: "Nov 27, 2019",
  },
  {
    url: "https://engineering.innovid.com/my-top-9-hand-picked-talks-from-cssconfbp-jsconfbp-19-some-bonuses-702fdf33bbf7",
    title: "My Top 9 Hand-picked Talks from CSSConfBP and JSConfBP ’19",
    description: "Summarizing my favorite talks from JSConf and CSSConf '19",
    image: "https://miro.medium.com/v2/resize:fit:400/0*_e0SBFKicMh2tgb5",
    publishDate: "Nov 26, 2019",
  },
  {
    url: "https://medium.com/better-programming/link-previews-more-than-meets-the-eye-aa13c77c6d69",
    title: "Link Previews — More than Meets the Eye",
    description: "Ever wondered how is this preview generated?",
    image: "https://miro.medium.com/v2/resize:fit:400/0*f6Vz4GodmmZIUtP6",
    publishDate: "Sep 10, 2019",
  },
  {
    url: "https://medium.com/better-programming/cleaner-typescript-with-the-non-null-assertion-operator-300789388376",
    description: "Reduce your cognitive load and make your code less verbose",
    image: "https://miro.medium.com/v2/resize:fit:400/format:webp/1*tPnsbYsfRrcPaDtsMX3ARQ.jpeg",
    title: "Cleaner TypeScript With the Non-Null Assertion Operator",
    publishDate: "Aug 25, 2019",
  },
  {
    url: "https://medium.com/@omril321/7-things-you-should-know-before-starting-with-side-projects-42dc1ddc1c37",
    title: "7 Things You Should Know Before Starting with Side Projects",
    description:
      "I discontinued my work on a side project I’ve started 18 months ago. Doesn’t sound like a big success story, right? I thought so…",
    image: "https://miro.medium.com/v2/resize:fit:400/0*6ht9ccoPSRX8SudN",
    publishDate: "Feb 24, 2019",
  },
  {
    url: "https://medium.com/@omril321/fixing-overly-aggressive-optimization-with-terser-f07309761b50",
    title: "Fixing Overly Aggressive Optimization with Terser",
    description:
      "A story of solving a mysterious “Syntax Error”, that appeared in our production Webpack build with no apparent reason.",
    image: "https://miro.medium.com/v2/resize:fit:400/0*i_3GXfPLKlfDKwhY",
    publishDate: "Jan 8, 2019",
  },
  {
    url: "https://www.youtube.com/watch?v=Bov9v7Oept4",
    title: "Microfrontends with iFrames",
    image: "https://i.ytimg.com/vi/Bov9v7Oept4/hqdefault.jpg",
    description:
      "Over the last couple of years we, at Innovid, have engaged with reusing some of our apps and embedding them in other apps. Join us as we explore the options we've examined and challenges encountered.",
    publishDate: "December 7, 2018",
  },
];
