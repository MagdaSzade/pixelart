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
import Result from './Result';

import '../styles/app.css';

class App extends React.Component {
    state = {
        result: false
    };

    onResult = () => {
        this.setState({ result: !this.state.result })
    }
    
    content = () => {
        if (this.state.result) {
            return <PopUp />
        } else {
            return (
                <div>
                    <div className="grid">
                        <SelectSize />
                        <SelectColor />
                    </div>
                    <div>
                        <Canva />
                    </div>
                    <Button onButtonClick={this.onResult} text="zapisz"/>
                </div>
            )
        }
    }

    render() {
        return (
            <Router>
                <div className="app-conteiner flex">
                    <HeaderBar />
                    <Switch>
                        <Route path="/:id" component={Result} />
                        <Route path="/">
                            {this.content()}
                        </Route>
                    </Switch>
                    <FooterBar />
                </div>
            </Router>
        );
    }
}

export default App;