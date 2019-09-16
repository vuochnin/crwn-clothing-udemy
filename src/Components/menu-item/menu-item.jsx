import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size}) => (

    <div 
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`menu-item ${size}`}
        >
            <div className='background-image' 
                 style={{ backgroundImage: `url(${imageUrl})` }} 
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
);

export default MenuItem;