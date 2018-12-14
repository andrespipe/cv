import React from 'react';

const Skill = (props) => (
    <div className="skill-item">
        <div className="skill-item-title">{props.title}</div>
        <div className="skill-item-score">
            <div className="skill-item-points">
                { (new Array(5).fill(5)).map( (item, index) => {
                    console.log('Score');
                    return (<span key={index} className={props.score > index ? 'scored' : 'score'}></span>)
                })}
            </div>
            {props.scoreDescription}
        </div>
    </div>
);

const Skills = (props) => (
    <div className="skills">
        <span className="skill-title">{props.title}</span>
        <hr/>
        { props.items.map( (skill, index) => {
            return (<Skill 
                key={index} 
                title={skill.title} 
                score={skill.score} 
                scoreDescription={skill.scoreDescription}
            />)
        })}
    </div>
); 

export {Skills, Skill};