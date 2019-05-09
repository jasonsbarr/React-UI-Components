import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderText from './HeaderText';
import ImageThumbnail from './ImageThumbnail';

const HeaderContent = () => {
    return (
        <div className="header-content card-text">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderText />
        </div>
    );
}

export default HeaderContent;
