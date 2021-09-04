import * as React from 'react';
import { attemptSettingMediumImageUrlByWidth } from '../../services/MediumImageService';

const idealImageWidth = 800;

const PostLink = ({ title, icon, description, image, url, type, provider, flags, publishDate }) => {
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
