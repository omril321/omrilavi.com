import * as React from 'react';
import './Header.scss';
import MeImage from "../common/MeImage/MeImage";
import HeaderLinks from "./HeaderLinks";


const Header = ({}) => {
    return (
        <header className="header">
            <div className="header_content-container">
                <div className="header_image-container">
                    <MeImage/>
                </div>
                <HeaderLinks/>
            </div>
        </header>
    )
};

export default Header;