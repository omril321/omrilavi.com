import * as React from 'react';
import './PageLayout.scss';
import "typeface-open-sans";
import SEO from "../seo";

const PageLayout: React.FC = ({ children }) => (
    <div className="page-layout">
        <SEO />
        <div className="page-layout_content-wrapper">
            {children}
        </div>
    </div>
);

export default PageLayout;