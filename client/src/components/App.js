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
    state = {
        isPopup: false,
        width: 5,
        height: 5,
        selectedColor: "black",
        pixels: [],
        sendArt: false
    };

    onSelectSize = size => {
        this.setState({
            width: parseInt(size.width),
            height: parseInt(size.height)
        });
    };

    onSelectColor = color => {
        this.setState({
            selectedColor: color
        })
    };

    isPopup() {
        if (this.state.isPopup) {
            return 
        }
    }
    
    onSaveArt = () => {
        this.setState({ sendArt: true })
    };

    sendArt = (pixels) => {
        this.setState({ 
            pixels: pixels, 
            sendArt: false, 
            isPopup: true 
        });
    }

    closePopUp = () => {
        this.setState({
            isPopup: false
        })
    }

    render() {
        return (
            <Router>
                <div className="app-conteiner flex">
                    <HeaderBar />
                    <Switch>
                        <Route path="/result">
                            <PopUp 
                                pixels={this.state.pixels} 
                                width={this.state.width}
                                height={this.state.height}
                                closePopUp={this.closePopUp}
                            />
                        </Route>
                        <Route path="/:id">
                            DUPA
                        </Route>
                        <Route path="/">
                            <div className="grid">
                                <SelectSize onSelectSize={this.onSelectSize}/>
                                <SelectColor onSelectColor={this.onSelectColor} />
                            </div>
                            <Canva 
                                selectedColor={this.state.selectedColor}
                                width={this.state.width}  
                                height={this.state.height}
                                sendArtState={this.state.sendArt}
                                sendArt={this.sendArt}
                            />
                            <Button onButtonClick={this.onSaveArt}  text="zapisz"/>
                        </Route>
                    </Switch>
                    <FooterBar />
                </div>
            </Router>
        );
    }
}

export default App;