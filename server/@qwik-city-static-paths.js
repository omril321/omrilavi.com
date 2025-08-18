const staticPaths = new Set(["/.DS_Store","/_headers","/blog-assets/3-considerations-for-your-next-utility-function-refactor-static-vs-dependency-injected.jpg","/blog-assets/7-things-you-should-know-before-starting-with-side-projects.jpg","/blog-assets/better-error-messages-in-typescript-42-smarter-type-alias-preservation.png","/blog-assets/cleaner-typescript-with-the-non-null-assertion-operator.jpeg","/blog-assets/developing-self-compassion-an-answer-to-the-constant-burnout.png","/blog-assets/fixing-overly-aggressive-optimization-with-terser.jpg","/blog-assets/git-metric-solving-the-pain-of-measuring-a-project-migration.png","/blog-assets/growing-as-a-technical-leader-lessons-from-the-book-staff-engineer.png","/blog-assets/how-typescripts-compiler-helped-us-prevent-redux-performance-issues.png","/blog-assets/keeping-your-data-fresh-optimizing-live-updates-with-websockets.jpg","/blog-assets/link-previews-more-than-meets-the-eye.jpg","/blog-assets/microfrontends-with-iframes.jpg","/blog-assets/my-top-9-hand-picked-talks-from-cssconfbp-and-jsconfbp-19.jpg","/blog-assets/omri-lavi-react-day-berlin-24-the-superpower-of-asts-how-we-saved-16-on-our-bundle-size.jpg","/blog-assets/omri-lavi-reactnext-24-the-superpower-of-asts-how-we-saved-16-on-our-bundle-size.jpg","/blog-assets/podcast-scaling-frontend-development-challenges-strategies.webp","/blog-assets/testkit-mastery-part-2-designing-a-developer-friendly-testkit.png","/blog-assets/testkit-mastery-part-3-building-the-core-structure-of-a-flexible-and-reliable-testkit.png","/blog-assets/testkit-mastery-part-4-design-for-easy-integration-into-testing-environments.png","/blog-assets/testkit-mastery-part-5-key-takeaways-and-lessons-learned-for-building-better-testkits.png","/blog-assets/the-superpower-of-babel-how-we-saved-16-on-our-bundle-size.png","/blog-assets/understanding-typescripts-skiplibcheck-once-and-for-all.png","/blog-assets/writing-your-first-custom-stylelint-rule.jpg","/favicon-120x120.png","/favicon-144x144.png","/favicon-16x16.png","/favicon-196x196.png","/favicon-32x32.png","/favicon.png","/favicon.svg","/manifest.json","/me.png","/me_large.png","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js","/~partytown/debug/partytown-atomics.js","/~partytown/debug/partytown-media.js","/~partytown/debug/partytown-sandbox-sw.js","/~partytown/debug/partytown-sw.js","/~partytown/debug/partytown-ww-atomics.js","/~partytown/debug/partytown-ww-sw.js","/~partytown/debug/partytown.js","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };