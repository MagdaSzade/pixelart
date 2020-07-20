import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import HeaderBar from './HeaderBar';
import SelectSize from './SelectSize';
import SelectColor from './SelectColor';
import Canva from './Canva';
import FooterBar from './FooterBar';
import Button from './Button';
import PopUp from './PopUp';

import '../styles/app.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="app-conteiner flex">
                    <HeaderBar />
                    <Switch>
                        <Route path="/result">
                            <PopUp />
                        </Route>
                        <Route path="/:id">
                            DUPA
                        </Route>
                        <Route path="/">
                            <div className="grid">
                                <SelectSize />
                                <SelectColor />
                            </div>
                            <Canva />
                            <a href="/result">
                                <Button text="zapisz"/>
                            </a>
                        </Route>
                    </Switch>
                    <FooterBar />
                </div>
            </Router>
        );
    }
}

export default App;