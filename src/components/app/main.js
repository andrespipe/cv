import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Roster from '../../pages/roster/roster';
import Schedule from '../../pages/schedule/schedule';
import CVPage from '../../pages/cv/cvPage';

class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/roster" component={Roster} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/cv" component={CVPage} />
                </Switch>
            </main>
        );
    }
}

export default Main;