import * as React from 'react';
import './PageLayout.scss';
import "typeface-open-sans";
import SEO from "../seo";

const PageLayout = ({children}) => (
    <div className="page-layout">
        <SEO title="Omri Lavi"/>
        <div className="page-layout_content-wrapper">
            {children}
        </div>
    </div>
);

export default PageLayout;