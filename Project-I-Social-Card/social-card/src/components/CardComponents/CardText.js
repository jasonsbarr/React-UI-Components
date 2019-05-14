import React from 'react';
import './Card.css';

const CardText = () => {
    return (
        <div className="card-text">
            <h3 className="card-text-title">
                Get started with React
            </h3>
            <p className="card-text-primary">
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <p className="card-text-secondary">
                reactjs.org
            </p>
        </div>
    );
}

export default CardText;
