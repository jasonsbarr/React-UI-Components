import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardText from './CardText';

const CardContent = () => {
    return (
        <div className="card-content">
            <CardBanner />
            <CardText />
        </div>
    );
}

export default CardContent;
