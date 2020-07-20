import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import { sendArt, checkIfPaid } from '../api/database'

import '../styles/popup.css';

class PopUp extends React.Component {
    state = {
        isFacebook: false,
        id: '5f0f52155e76773a3011252c',
        isPaid: false
    }

    componentDidMount() {
        console.log(this.props.pixels);
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        this.props.pixels.forEach((pixel) => {
            ctx.fillStyle =  pixel.color;
            const startPointY = parseInt(pixel.key.substring(0, 2)) * 10;
            const startPointX = parseInt(pixel.key.substring(2)) * 10;
            ctx.fillRect(startPointX, startPointY, 10, 10);
        });
        //this.saveToDatabase();
    }

    saveToDatabase = async () => {
        let pixelsToSend = [];
        for (const pixel of this.props.pixels) {
            pixelsToSend.push(pixel.color);
        }
        const response = await sendArt(pixelsToSend, this.props.width);
        this.setState({ id: response.data._id });
        this.checkIfPaid();
    }
    
    checkIfPaid = async () => {
        if ( !this.state.isPaid ) {
            var checking = setInterval(async () => {
                let res = await checkIfPaid(this.state.id);
                console.log(res);
                if ( res === true ) {
                    clearInterval(checking);
                }
            }, 1000);
        };
    } 
    

    openPortal = async () => {
        const win = window.open( 'https://www.siepomaga.pl/skarbonki/pixelart/koszyk/dodaj');
        win.focus();
    }



    isFacebookAvailable() {
        if (this.state.isFacebook) {
            return (
                <iframe 
                    src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.google.com%2F&layout=button&size=large&width=107&height=28&appId"
                    title="facebook-share-button"
                    width="107" 
                    height="28" 
                    style={{border:'none', overflow:'hidden'}} scrolling="no" 
                    frameBorder="0"
                    allow="encrypted-media">
                </iframe>
            )
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
                        <a href="result.html">
                            <Button  text="przejdź"/>
                        </a>
                    </div>
                    {this.isFacebookAvailable()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        width: state.size.width,
        height: state.size.height,
        pixels: state.pixels
    }
}

export default connect(mapStateToProps)(PopUp);