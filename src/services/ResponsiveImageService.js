const PROVIDERS_TO_BUILDER = [
    {
        pattern: /(https?:\/\/(?:www.)?miro\.medium\.com\/max\/)(\d+)(\/.*)/,
        replacement: widthInPixel => `$1${widthInPixel}$3`
    }
]
export const getResponsiveImage = (originalImageUrl, breakpoints) => {
    const srcOnly = {src: originalImageUrl};
    const provider = PROVIDERS_TO_BUILDER.find(({pattern}) => pattern.test(originalImageUrl));
    if (!provider) {
        return srcOnly;
    }
    const srcSet = breakpoints.map(bp => {
        const src = originalImageUrl.replace(provider.pattern, provider.replacement(bp)); //e.g. http://cloudinary/400 => http://cloudinary/${bp} =>
        return `${src} ${bp}w` //e.g. http://cloudinary/400 400w
    }).join(', ');
    return { ...srcOnly, srcSet };
}
