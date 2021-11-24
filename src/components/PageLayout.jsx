import * as React from 'react';
import "typeface-open-sans";
import Seo from "./seo";

const PageLayout = ({children}) => (
    <div className="bg-bodyColor flex flex-col" data-test-page-layout>
        <Seo/>
        <div className="mx-auto py-11 overflow-scroll">
            {children}
        </div>
    </div>
);

export default PageLayout;