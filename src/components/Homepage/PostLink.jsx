import * as React from 'react';
import { attemptSettingMediumImageUrlByWidth } from "../../services/MediumImageService";

const idealImageWidth = 800;

const PostLink = ({ title, icon, description, image, url, type, provider, flags, publishDate }) => {
    const adaptedImageUrl = attemptSettingMediumImageUrlByWidth(image, idealImageWidth);
    const dateStr = new Date(publishDate).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <a className="h-64 rounded-xl transition-all group relative bg-normal hover:bg-zoomed-in bg-center text-center overflow-hidden duration-700 mb-8 shadow-sharp"
            style={{ backgroundImage: `url(${adaptedImageUrl})` }} href={url}>
            <div className="h-full bg-primary-xlight bg-opacity-90 flex flex-col p-4 items-center">
                <div className="absolute t-8 r-8 w-6 h-6 self-end bg-cover" style={{ backgroundImage: `url(${icon})` }} />
                <div className="p-4 group-hover:flex-1 flex-auto">
                    <h3 className="text-2xl transform group-hover:scale-90 group-hover:-translate-y-2 group-hover:m-0 transition-all font-extrabold">{title}</h3>
                    <div className="overflow-hidden text-lg font-semibold h-0 group-hover:h-20 transition-all">
                        <p className="transition-all transform -translate-y-full group-hover:translate-y-0 px-5">{description}</p>
                    </div>
                </div>
                <p className="transition-all text-secondary-xdark text-base group-hover:text-sm">{dateStr}</p>
            </div>
        </a>
    );
}

export { PostLink };
