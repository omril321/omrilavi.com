import * as React from 'react';
import "typeface-open-sans";
import Seo from "./seo";

const PageLayout = ({children}) => (
    <div className="bg-primary-xdark">
        <Seo/>
        <div className="mx-auto px-5 py-11 max-w-3xl">
            {children}
        </div>
    </div>
);

export default PageLayout;