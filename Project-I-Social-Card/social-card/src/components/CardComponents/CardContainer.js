import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = ({uri}) => {
    return (
        <div className="card-container">
            <a href={uri} target="_blank">
                <CardContent />
            </a>
        </div>
    );
}

export default CardContainer;
