import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CircularProgress } from '@material-ui/core';

import Button from '../common/Button';
import Display from '../common/Display';
import IsNotPaid from '../common/IsNotPaid';
import { BaseURLFacebook, sendArt } from '../../api/database';

import '../../styles/shareArt.css';

class ShareArt extends React.Component {
    constructor(props) {
        super(props);
        this.idAreaRef = React.createRef();
        this.interwalID = null;
    }

    state = {
        id: "",
        isPaid: false,
        isError: false,
    }

    componentDidMount() {
        this.saveToDatabase();
    }

    componentWillUnmount() {
        if(this.interwalID) clearInterval(this.interwalID);
    }

    saveToDatabase = async () => {
        let pixelsToSend = [];
        for (const pixel of this.props.pixels) {
            pixelsToSend.push(pixel.color);
        }
        const response = await sendArt(pixelsToSend, this.props.width);
        if (response) {
            this.setState({ id: response.data._id });
        } else {
            this.setState({ isError: true })
        }
    }

    facebookAvailable() {
        return (
            <div>
                <p>
                    Twój pixelart jest dostępny pod adresem:
                    < br />
                    <a href={`${BaseURLFacebook}/${this.state.id}`}>
                        {`${BaseURLFacebook}/`}
                        <br /> {`${this.state.id}`}
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

    isPaid = () => {
        this.setState({ isPaid: true });
    }

    textDisplay() {
        return (
            <div className="summary">
                <IsNotPaid id={this.state.id} isPaid={this.isPaid} />
                <p>
                    Po dokonaniu płatności twój pixelart będzie dostępny pod adresem:
                    < br />
                    <a href={`https://${BaseURLFacebook}/${this.state.id}`}>
                        {`${BaseURLFacebook}/`}
                        <br /> {`${this.state.id}`}
                    </a>
                </p>
            </div>
        )
    }

    whatToDisplay() {
        if (this.state.isError) {
            return (
                <p>
                    UPS! Coś poszło nie tak... Przykro mi.
                    <br />
                    Spróbuj ponownie później.
                </p>  
            )
        } else if (this.state.id === "") {
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

ShareArt.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    pixels: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(ShareArt);