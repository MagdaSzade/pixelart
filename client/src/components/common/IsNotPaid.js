import React from 'react';

import { CircularProgress } from '@material-ui/core';

import Button from './Button';
import { checkIfPaid } from '../../api/database';

import '../../styles/isNotPaid.css';

class IsNotPaid extends React.Component {
    constructor(props) {
        super(props);
        this.idAreaRef = React.createRef();
        this.interwalID = null;
    }

    state = {
        id: ""
    }

    componentDidMount() {
        this.setState({ id: this.props.id });
    }

    componentDidUpdate() {
        if(!this.state.id && this.props.id) {
            this.setState({ id: this.props.id })
        }
        if(this.state.id) {
            this.checkIfPaid(this.state.id);
        }
    }

    componentWillUnmount() {
        if(this.interwalID) clearInterval(this.interwalID);
    }

    checkIfPaid = async () => {
        if ( !this.state.isPaid ) {
            this.interwalID = setInterval(async () => {
                let res = await checkIfPaid(this.state.id);
                if ( res === true ) {
                    this.props.isPaid();
                    clearInterval(this.interwalID);
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

    text() {
        return (
            <div className="is-not-paid">
                <p>
                    Aby udostępnić swój pixelart wpłać cokolwiek na skarbonkę Sandry.
                    W polu słowa wsparcia wpisz:
                </p>
                <input 
                    ref={this.idAreaRef}
                    type="text"
                    value={this.state.id}
                    readOnly="readOnly" />
                <br />
                <Button onButtonClick={this.copyId} text="Skopiuj ID" /> 
                <Button onButtonClick={this.openPortal} text="wpłać" />
                <p>Sprawdzam czy dokonano płatności:</p>
                <CircularProgress color='inherit' size="2rem"/>
                <p></p>  
            </div>
        )
    }

    whatToRender() {
        if (this.state.id === "") {
            return ( 
            <div style={{margin:"10px"}}>
                <CircularProgress color='inherit' size="2rem"/>
            </div>
            )
        } else {
            return <div>{this.text()}</div>    
        }
    }

    render() {
        return <div>{this.whatToRender()}</div>
    }
}

export default IsNotPaid;