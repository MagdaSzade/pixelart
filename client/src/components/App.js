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
        hight: 10,
    };

    showPopUp = () => {
        this.setState({isPopup: !this.state.isPopup});
    };

    onSelectSize = size => {
        this.setState({
            width: size.width,
            hight: size.hight
        });
    };

    render() {
        return (
            <div className="app-conteiner flex">
                <HeaderBar showPopUp={this.showPopUp} />
                <div className="grid">
                    <SelectSize onSelectSize={this.onSelectSize}/>
                    <SelectColor />
                </div>
                <FooterBar />
            </div>
        );
    }
}

//
//
//<Canva />
//

export default App;