import React from 'react';
import TimeItem from './timeItem';

const Section = (props) => (
    <div className="section">
        <span className="section-title">{props.title}</span>
        <hr/>
        <div className="section-body">
            { props.elements.map((element, index) => 
                {
                    return (<TimeItem 
                        key={index}
                        title={element.title} 
                        items={element.elements} 
                        from={element.from} 
                        to={element.to} 
                        description={element.description} 
                    />);
                })
            }
        </div>
    </div>
);

export default Section;