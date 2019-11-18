import * as React from 'react';
import './PageLayout.scss';
import Header from "../Header/Header";
import "typeface-open-sans";

const PageLayout = ({children}) => (
    <div className="page-layout">
        <Header/>
        <div className="page-layout_content-wrapper">
            {children}
        </div>
    </div>
);

export default PageLayout;