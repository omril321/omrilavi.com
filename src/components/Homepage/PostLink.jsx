import * as React from 'react';
import { attemptSettingMediumImageUrlByWidth } from '../../services/MediumImageService';

const idealImageWidth = 800;

const PostLink = ({ title, icon, description, image, url, type, provider, flags, publishDate }) => {
    const adaptedImageUrl = attemptSettingMediumImageUrlByWidth(image, idealImageWidth);
    const dateStr = new Date(publishDate).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <article className="px-4">
            <a className="flex h-28 transition-all duration-300 sm:h-60 sm:mb-8 sm:flex-col overflow-hidden sm:rounded-lg sm:hover:shadow-soft-dark md:h-96 md:mb-14"
                data-test-post-link
                href={url}>
                <span className="w-tiny flex-none h-20 sm:h-32 sm:w-auto">
                    <img className="h-full w-full object-cover" src={adaptedImageUrl} alt={title}/>
                </span>

                <div className="pl-5 sm:p-4 flex flex-col">
                    <span className="text-xs font-semibold text-secondary-xlight mb-2">{dateStr}</span>
                    <h4 className="text-sm text-primary-xlight flex-1 line-clamp-3 whitespace-break-spaces md:h-16">{title}</h4>
                    <desc className="invisible md:visible text-primary-xlight text-sm">{description}</desc>
                </div>
            </a>
        </article>
    );
}

const OldPostLink = ({ title, icon, description, image, url, type, provider, flags, publishDate }) => {
    const adaptedImageUrl = attemptSettingMediumImageUrlByWidth(image, idealImageWidth);
    const dateStr = new Date(publishDate).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <a className="h-48 md:h-64 rounded-xl transition-all group bg-center text-center overflow-hidden duration-700 shadow-sharp bg-no-repeat bg-cover"
            data-test-post-link
            style={{ backgroundImage: `url(${adaptedImageUrl})` }}
            href={url}>
            <article className="h-full bg-primary-xlight bg-opacity-90 flex flex-col shadow-strong-inner">
                <div className="h-full flex group-hover:h-0 transition-all flex-shrink-0 items-center overflow-hidden relative">
                    <h3 className="px-10 md:py-0 m-0 flex-auto text-lg md:text-2xl font-extrabold leading-6">{title}</h3>
                    <span className="transition-all text-secondary-xdark text-xs md:text-base absolute bottom-4 left-4 md:bottom-8 md:left-8 ">{dateStr}</span>
                </div>

                <div className="h-full transition flex items-center bg-opacity-30 bg-secondary-light relative overflow-hidden">
                    <desc className="px-10 flex-grow text-sm md:text-lg font-semibold">{description}</desc>
                    <div className="absolute bottom-4 right-4 w-6 h-6 self-end bg-cover filter drop-shadow-md" style={{ backgroundImage: `url(${icon})` }} />
                </div>
            </article>
        </a>
    );
}

export { PostLink };
