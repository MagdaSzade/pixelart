import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Display from './Display';
import { BaseURLFacebook, sendArt, checkIfPaid } from '../api/database';

import '../styles/popup.css';

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.idAreaRef = React.createRef();
    }
    state = {
        id: "",
        isPaid: false,
    }

    componentDidMount() {
        this.saveToDatabase();
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
                if ( res === true ) {
                    this.setState({ isPaid: true });
                    clearInterval(checking);
                }
            }, 60000);
        };
    } 
    
    openPortal = async () => {
        const win = window.open('https://www.siepomaga.pl/skarbonki/pixelart/koszyk/dodaj');
        win.focus();
    }

    isFacebookAvailable() {
        if (this.state.isPaid) {
            return (
                <iframe 
                    src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2F${BaseURLFacebook}/${this.state.id}&layout=button&size=large&width=77&height=28&appId`}
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

    copyId = () => {
        this.idAreaRef.current.select();
        document.execCommand('copy');
    }

    render() {
        return (
            <div className="popup-out" onClick={this.props.closePopUp}>
                <div className="popup-in">
                    <Display pixels={this.props.pixels} width={this.props.width} height={this.props.height} />
                    <div className="summary">
                        Aby udostępnić swój pixelart na facebooku zapłać cokolwiek na skarbonkę Sandry.
                        W polu słowa wsparcia wpisz:
                        <br />
                        <input 
                            ref={this.idAreaRef}
                            type="text"
                            value={this.state.id}
                            readOnly="readOnly" />
                        <Button onButtonClick={this.copyId} text="Skopiuj ID" /> 
                        <Button onButtonClick={this.openPortal} text="wpłać" />
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