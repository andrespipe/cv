import React from 'react';

import CVAPI from './cvAPI';
import { Skills } from './cvComponents/personalInfo/skills';
import Section from './cvComponents/content/section';
import Summary from  './cvComponents/content/summary';
import PersonalInfo from './cvComponents/personalInfo/personalInfo';

class CVPage extends React.Component{


    componentDidMount(){
        const api = new CVAPI();
        this.setState({ CV_DATA : api.getCVData() });
    }

    getSkills(){
        return this.state.CV_DATA.Skills.map( (skill, index) => {
            return (
                <Skills 
                    key={index} 
                    title={skill.title} 
                    items={skill.items} 
                />
            )
        });
    }

    getElements(){
        return this.state.CV_DATA.LaboralItems.map( (element, index) => {
            return(
                <div key={index}>
                    <Section title={element.title} elements={element.element} />
                </div>
            );
        });
    }

    getFillPage(){
        return(
            <div className="cv-page">
                <div className="cv-header bg-dark text-white">
                    <h2>{this.state.CV_DATA.Name}</h2>
                    <h5>{this.state.CV_DATA.Description}</h5>
                </div>
                <div className="cv-content">
                    <div className="cv-info">
                        <Summary summary={this.state.CV_DATA.Summary} />
                        {this.getElements()}
                    </div>
                    <div className="personal-info">
                        <PersonalInfo 
                            title={this.state.CV_DATA.PersonalInfo.title}
                            items={this.state.CV_DATA.PersonalInfo.items}
                        />
                        {this.getSkills()}
                    </div>
                </div>
            </div>
        );
    }

    getEmptyPage(){
        return (
            <h3>Data no loaded</h3>
        );
    }

    render(){
        return (
                <div>
                    <hr/>
                    { this.state && this.state.CV_DATA ? this.getFillPage() : this.getEmptyPage() }
                </div>
            );
    }
}

export default CVPage;