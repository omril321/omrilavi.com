import { getResponsiveImage } from "./ResponsiveImageService";

describe('ResponsiveImageService', () => {
    describe('getResponsiveImage', () => {
        const BREAKPOINTS = [1, 90];

        it('should return the same URL if it is not a Medium image URL', () => {
            const input = "http://google.com";
            const expected = { src: input };

            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });

        it('should return an altered URL with given width when input is a Medium image', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5";
            const expected = {
                src: input,
                srcSet: `https://miro.medium.com/max/${BREAKPOINTS[0]}/0*_e0SBFKicMh2tgb5 ${BREAKPOINTS[0]}w, https://miro.medium.com/max/${BREAKPOINTS[1]}/0*_e0SBFKicMh2tgb5 ${BREAKPOINTS[1]}w`
             };

            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has query params', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5?some_param=some_value";
            const expected = {
                src: input,
                srcSet: `https://miro.medium.com/max/${BREAKPOINTS[0]}/0*_e0SBFKicMh2tgb5?some_param=some_value ${BREAKPOINTS[0]}w, https://miro.medium.com/max/${BREAKPOINTS[1]}/0*_e0SBFKicMh2tgb5?some_param=some_value ${BREAKPOINTS[1]}w`
             };

            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has additional path info', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";
            const expected = {
                src: input,
                srcSet: `https://miro.medium.com/max/${BREAKPOINTS[0]}/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value ${BREAKPOINTS[0]}w, https://miro.medium.com/max/${BREAKPOINTS[1]}/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value ${BREAKPOINTS[1]}w`
             };

            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has additional path info and http protocol', () => {
            const input = "http://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";
            const expected = {
                src: input,
                srcSet: `http://miro.medium.com/max/${BREAKPOINTS[0]}/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value ${BREAKPOINTS[0]}w, http://miro.medium.com/max/${BREAKPOINTS[1]}/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value ${BREAKPOINTS[1]}w`
             };


            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });

        it('should return an altered URL with given width when input is a Medium image with "www" prefix', () => {
            const input = "http://www.miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5";
            const expected = {
                src: input,
                srcSet: `http://www.miro.medium.com/max/${BREAKPOINTS[0]}/0*_e0SBFKicMh2tgb5 ${BREAKPOINTS[0]}w, http://www.miro.medium.com/max/${BREAKPOINTS[1]}/0*_e0SBFKicMh2tgb5 ${BREAKPOINTS[1]}w`
             };

            const result = getResponsiveImage(input, BREAKPOINTS);

            expect(result).toStrictEqual(expected);
        });
    });
});