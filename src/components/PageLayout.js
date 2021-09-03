import * as React from 'react';
import "typeface-open-sans";
import Seo from "./seo";
import SocialButtons from "./common/SocialButtons/SocialButtons";

const PageLayout = ({children}) => (
    <div className="bg-gray-800 flex flex-col md:flex-row-reverse fixed inset-0" data-test-page-layout>
        <Seo/>
        <div className="mx-auto px-5 py-11 max-w-3xl overflow-scroll">
            {children}
        </div>
        <div className="bg-gray-900 md:bg-opacity-0 flex md:fixed -inset-y-0 left-0 items-center">
            <SocialButtons/>
        </div>
    </div>
);

export default PageLayout;