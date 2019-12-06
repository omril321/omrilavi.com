import {attemptSettingMediumImageUrlByWidth} from "./MediumImageService";

describe('MediumImageService', () => {
    describe('attemptSettingMediumImageUrlByWidth', () => {
        it('should return the same URL if it is not a Medium image URL', () => {
            const input = "http://google.com";
            const expected = "http://google.com";

            const result = attemptSettingMediumImageUrlByWidth(input, 1);

            expect(result).toBe(expected);
        });

        it('should return an altered URL with given width when input is a Medium image', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5";
            const expected = "https://miro.medium.com/max/123/0*_e0SBFKicMh2tgb5";

            const result = attemptSettingMediumImageUrlByWidth(input, 123);

            expect(result).toBe(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has query params', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5?some_param=some_value";
            const expected = "https://miro.medium.com/max/123/0*_e0SBFKicMh2tgb5?some_param=some_value";

            const result = attemptSettingMediumImageUrlByWidth(input, 123);

            expect(result).toBe(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has additional path info', () => {
            const input = "https://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";
            const expected = "https://miro.medium.com/max/123/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";

            const result = attemptSettingMediumImageUrlByWidth(input, 123);

            expect(result).toBe(expected);
        });

        it('should return an altered URL with given width when input is a Medium image which has additional path info and http protocol', () => {
            const input = "http://miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";
            const expected = "http://miro.medium.com/max/123/0*_e0SBFKicMh2tgb5/additional/path?some_param=some_value";

            const result = attemptSettingMediumImageUrlByWidth(input, 123);

            expect(result).toBe(expected);
        });

        it('should return an altered URL with given width when input is a Medium image with "www" prefix', () => {
            const input = "http://www.miro.medium.com/max/1200/0*_e0SBFKicMh2tgb5";
            const expected = "http://www.miro.medium.com/max/123/0*_e0SBFKicMh2tgb5";

            const result = attemptSettingMediumImageUrlByWidth(input, 123);

            expect(result).toBe(expected);
        });
    });
});