import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import Result from './Result';
import CreateArt from './CreateArt';

import '../styles/styles.css';
import '../styles/app.css';

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="app-conteiner grid">
                        <HeaderBar />
                        <div className="content-conteiner">
                            <Switch>
                                <Route path="/:id" component={Result} />
                                <Route path="/" component={CreateArt} />
                            </Switch>
                        </div>
                        <FooterBar />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;