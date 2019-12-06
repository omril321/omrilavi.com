export const attemptSettingMediumImageUrlByWidth = (originalImageUrl, requiredWidth) => {
    const mediumUrlPattern = /(https?:\/\/(?:www.)?miro.medium.com\/max\/)(\d+)(\/.*)/;
    if (!mediumUrlPattern.test(originalImageUrl)) {
        return originalImageUrl;
    }

    return originalImageUrl.replace(mediumUrlPattern, `$1${requiredWidth}$3`);
};
