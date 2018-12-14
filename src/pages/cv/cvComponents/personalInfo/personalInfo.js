import React from 'react';

const PersonalInfo = (props) => (
    <div>
        <span className="skill-title">{props.title}</span>
        <hr/>
        {
            props.items.map( (element, index) => {
                return (
                    <div key={index}>
                        <p className="skill-title">{element.title}</p>
                        <p className="skill-text">{element.text}</p>
                    </div>
                );
            })
        }
    </div>
);

export default PersonalInfo;