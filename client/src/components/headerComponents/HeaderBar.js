import React from 'react';
import { connect } from 'react-redux';

import { createArt, showArt } from '../../actions';
import Button from './Button';

import '../../styles/styles.css';

class HeaderBar extends React.Component {

    onChangeView(event) {
        const id = event.target.getAttribute("data-id");
        if ( id === "back" ) {
            this.props.showArt();
        } else if ( id === "create" ) {
            this.props.createArt();
        } else if ( id === "info" ) {
            console.log("info");
        }
    }

    buttonContent() {
        if (this.props.actualView === "CREATE_ART") {
            return <Button data="back" text="wróć" />
        } else {
            return <Button data="create" text="stwórz" />
        }
    }

    render() {
        return (
            <div className='bar-out'>
                <div onClick={(event) => this.onChangeView(event)} className='bar-in' data-id="background">
                    <Button data="info" text="info"/>
                    <div className='header-content' data-id="text">
                        PIXELART DLA FRANKA
                    </div>
                    {this.buttonContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualView: state.actualView
    }
}

export default connect(mapStateToProps, { createArt, showArt })(HeaderBar);