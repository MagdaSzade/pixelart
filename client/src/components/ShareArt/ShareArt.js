import React from 'react';
import { connect } from 'react-redux';

import { CircularProgress } from '@material-ui/core';

import Button from '../common/Button';
import Display from '../common/Display';
import { BaseURLFacebook, sendArt, checkIfPaid } from '../../api/database';

import '../../styles/shareArt.css';

class ShareArt extends React.Component {
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
                console.log(res);
                if ( res === true ) {
                    this.setState({ isPaid: true });
                    clearInterval(checking);
                }
            }, 5000);
        };
    }

    copyId = () => {
        this.idAreaRef.current.select();
        document.execCommand('copy');
    }
    
    openPortal = async () => {
        const win = window.open('https://www.siepomaga.pl/skarbonki/pixelart/koszyk/dodaj');
        win.focus();
    }

    facebookAvailable() {
        return (
            <div>
                <p>
                    Twój pixelart jest dostępny pod adresem:
                    < br />
                    <a href={`${BaseURLFacebook}/${this.state.id}`}>
                        {`${BaseURLFacebook}/${this.state.id}`}
                    </a>
                </p>
                <iframe 
                    src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2F${BaseURLFacebook}/${this.state.id}&layout=button&size=large&width=77&height=28&appId`}
                    title="facebook-share-button"
                    width="107" 
                    height="28" 
                    style={{border:'none', overflow:'hidden'}} scrolling="no" 
                    frameBorder="0"
                    allow="encrypted-media">
                </iframe>
            </div>
        )
    }

    textDisplay() {
        return (
            <div className="summary">
                <p>
                    Aby udostępnić swój pixelart na facebooku zapłać cokolwiek na skarbonkę Sandry.
                    W polu słowa wsparcia wpisz:
                </p>
                <input 
                    ref={this.idAreaRef}
                    type="text"
                    value={this.state.id}
                    readOnly="readOnly" />
                <Button onButtonClick={this.copyId} text="Skopiuj ID" /> 
                <Button onButtonClick={this.openPortal} text="wpłać" />
                <p>Sprawdzam czy dokonano płatności:</p>
                <CircularProgress color='inherit' size="2rem"/>
            </div>
        )
    }

    whatToDisplay() {
        if (this.state.id === "") {
            return ( 
            <div style={{margin:"10px"}}>
                <CircularProgress color='inherit' size="2rem"/>
            </div>
            )
        }
        return (this.state.isPaid) ? this.facebookAvailable() : this.textDisplay();
    }

    render() {
        return (
            <div className="share-art">
                <Display pixels={this.props.pixels} width={this.props.width} height={this.props.height} />
                {this.whatToDisplay()}
                <Button onButtonClick={this.props.onBack} text="wróć" />
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

export default connect(mapStateToProps)(ShareArt);