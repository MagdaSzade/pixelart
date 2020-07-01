import React from 'react';

import HeaderBar from './HeaderBar';
import SelectSize from './SelectSize';
import SelectColor from './SelectColor';
import Canva from './Canva';
import FooterBar from './FooterBar';
import Button from './Button';
import PopUp from './PopUp';

import '../styles/app.css'

class App extends React.Component {
    state = {
        isPopup: false,
        width: 10,
        height: 10,
        selectedColor: "black"
    };

    onSelectSize = size => {
        console.log(size);
        this.setState({
            width: size.width,
            height: size.height
        });
    };

    onSelectColor = color => {
        this.setState({
            selectedColor: color
        })
    };

    isPopup() {
        if (this.state.isPopup) {
            return <PopUp />
        }
    }
    
    onSaveArt = () => {
        this.setState({ isPopup: true })
    };

    render() {
        return (
            <div className="app-conteiner flex">
                <HeaderBar />
                <div className="grid">
                    <SelectSize onSelectSize={this.onSelectSize}/>
                    <SelectColor onSelectColor={this.onSelectColor}/>
                </div>
                <Canva 
                    selectedColor={this.state.selectedColor}
                    width={this.state.width}  
                    height={this.state.height}
                />
                <Button onClick={this.onSaveArt} text="zapisz"/>
                <div className="result"></div>
                <FooterBar />
                { this.isPopup() }
            </div>
        );
    }
}

export default App;