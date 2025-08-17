const staticPaths = new Set(["/.DS_Store","/_headers","/favicon-120x120.png","/favicon-144x144.png","/favicon-16x16.png","/favicon-196x196.png","/favicon-32x32.png","/favicon.png","/favicon.svg","/manifest.json","/me.png","/me_large.png","/q-manifest.json","/robots.txt","/service-worker.js"]);
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