import * as React from 'react';
import './PageLayout.scss';
import "typeface-open-sans";
import Seo from "../seo";

const PageLayout = ({children}) => (
    <div className="page-layout">
        <Seo/>
        <div className="page-layout_content-wrapper">
            {children}
        </div>
    </div>
);

export default PageLayout;