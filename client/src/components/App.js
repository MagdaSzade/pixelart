import React from 'react';

import HeaderBar from './HeaderBar';
import SelectSize from './SelectSize';
import SelectColor from './SelectColor';
import Canva from './Canva';
import FooterBar from './FooterBar';

import '../styles/app.css'

class App extends React.Component {
    state = {
        isPopup: false,
        width: 10,
        height: 10,
        selectedColor: "black"
    };

    showPopUp = () => {
        this.setState({isPopup: !this.state.isPopup});
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

    render() {
        return (
            <div className="app-conteiner flex">
                <HeaderBar showPopUp={this.showPopUp} />
                <div className="grid">
                    <SelectSize onSelectSize={this.onSelectSize}/>
                    <SelectColor onSelectColor={this.onSelectColor}/>
                </div>
                <Canva 
                    selectedColor={this.state.selectedColor}
                    width={this.state.width}  
                    height={this.state.height}
                />
                <FooterBar />
            </div>
        );
    }
}

export default App;