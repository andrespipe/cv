import React from 'react';

class CVAPI extends React.Component{

    getCVData(){
        return CV_DATA;
    }
}

export default CVAPI;

const EXPERIENCE = [
    {
        from: '2017-08',
        to: 'present',
        title: 'GLOBANT',
        description: 'Semi senior Web UI developer',
        elements: [
            'Bilingual engineer (Spanish/English)',
            'Work with clients from different countries',
            'Improve of the architecture of the products developed',
            'Boosted the performance of the existing applications'
        ]
    },

];

const CV_DATA = {
    Name: 'Andres Molina',
    Description: 'Web UI Developer - Software engineer and master in UX design',
    Summary: 'Passionate web developer for create great and effective solutions in the small amount of time posible. Ive been developed an e-commerce responsive site, web video player, management information systems for financial institutions.  Passionate about software architecture, cloud computing and deployment technologies. Professor in communication science and software engineering faculty. ',
    LaboralItems : [
        { title: 'Experience', element: EXPERIENCE.concat(EXPERIENCE.slice()) }
    ],
    PersonalInfo: {
        title: 'Personal info',
        items: [
            { title: 'Address', text: 'Cra 48 # 150 A 31, Bogotá, Colombia' },
            { title: 'Address', text: 'Cra 48 # 150 A 31, Bogotá, Colombia' },
            { title: 'Address', text: 'Cra 48 # 150 A 31, Bogotá, Colombia' }
        ]
    },
    Skills: [
        { title: 'Skills', items: [
            { title: 'Angular', score: 5, scoreDescription: 'Expert'},
            { title: 'React JS', score: 5, scoreDescription: 'Intermediate'}
        ]},
        { title: 'Software', items: [
            { title: 'VS Code', score: 4, scoreDescription: 'Advanced'},
            { title: 'VisualStudio', score: 4, scoreDescription: 'Advanced'}
        ]}
    ]
};
