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

                <div className="pl-5 sm:p-4">
                    <div className="text-xs font-semibold text-secondary-xlight mb-2">{dateStr}</div>
                    <h4 className="text-sm text-primary-xlight line-clamp-3 whitespace-break-spaces md:h-16">{title}</h4>
                    <desc className="invisible md:visible text-primary-xlight text-sm">{description}</desc>
                </div>
            </a>
        </article>
    );
}

export { PostLink };
