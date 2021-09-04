import * as React from 'react';
import "typeface-open-sans";
import Seo from "./seo";
import SocialButtons from "./common/SocialButtons/SocialButtons";

const PageLayout = ({children}) => (
    <div className="bg-bodyColor flex flex-col lg:flex-row-reverse fixed inset-0" data-test-page-layout>
        <Seo/>
        <div className="mx-auto px-10 md:px-20 lg:px-28 py-11 overflow-scroll">
            {children}
        </div>
        <div className="bg-gray-900 lg:bg-opacity-0 flex lg:fixed -inset-y-0 left-0 items-center">
            <SocialButtons/>
        </div>
    </div>
);

export default PageLayout;