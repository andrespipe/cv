import React from 'react';
import Item from './item';

const TimeItem = (props) => (
    <div className="time-item">
        <div className="time">
            {props.from} { (props.to ? ' - ' + props.to : '') }
        </div>
        <div className="item">
            <p className="item-title">{props.title}</p>
            <span className="item-description">{props.description}</span>
            <div className="item-body">
                <Item items={props.items} />
            </div>
        </div>
    </div>
);

export default TimeItem;