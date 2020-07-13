import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import Button from './Button';

import '../styles/popup.css';

class PopUp extends React.Component {
    state = {
        isFacebook: false
    }
    componentDidMount() {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        this.props.pixels.forEach((pixel, index) => {
            ctx.fillStyle = pixel.color;
            const startPointY = parseInt(pixel.key.substring(0, 2)) * 10;
            const startPointX = parseInt(pixel.key.substring(2)) * 10;
            ctx.fillRect(startPointX, startPointY, 10, 10);
            setTimeout(() => {this.setState({isFacebook: true})}, 10000)
        })
    }

    openPortal = () => {
        const win = window.open( 'https://www.siepomaga.pl/skarbonki/pixelart/koszyk/dodaj' ,'_blank');
        win.focus();
    }

    isFacebookAvailable() {
        if (this.state.isFacebook) {
            return <FacebookIcon />
        }
    }

    render() {
        return (
            <div className="popup-out" onClick={this.props.closePopUp}>
                <div className="popup-in">
                    <div className="art">
                        <canvas className="solid-border" id="myCanvas" width={this.props.width*10} height={this.props.height*10}></canvas>
                    </div>
                    <div className="summary">
                        Aby udostępnić swój pixelart na facebooku zapłać cokolwiek na skarbonkę dla Sandry.
                        <Button onButtonClick={this.openPortal} text="wpłać"/>
                    </div>
                    {this.isFacebookAvailable()}
                </div>
            </div>
        )
    }
};

export default PopUp;