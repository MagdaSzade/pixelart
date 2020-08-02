import React from 'react';

import SelectSize from './SelectSize';
import SelectColor from './SelectColor';
import Canva from './Canva';
import Button from './Button';
import ShareArt from './ShareArt';

import '../styles/createArt.css'


class  CreateArt extends React.Component {
    state = {
        result: false
    };

    onResult = () => {
        this.setState({ result: !this.state.result })
    }

    content = () => {
        if (this.state.result) {
            return <ShareArt />
        } else {
            return (
                <div className="create-art">
                    <div className="grid">
                        <SelectSize />
                        <SelectColor />
                    </div>
                    <div>
                        <Canva />
                    </div>
                    <Button onButtonClick={this.onResult} text="zapisz"/>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="create-art">
                {this.content()}
            </div>
        )
    }
}

export default CreateArt;