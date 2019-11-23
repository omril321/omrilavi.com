import * as React from 'react';
import './PageLayout.scss';
import "typeface-open-sans";

const PageLayout = ({children}) => (
    <div className="page-layout">
        <div className="page-layout_content-wrapper">
            {children}
        </div>
    </div>
);

export default PageLayout;