import React from 'react';

import SelectSize from './createArtCanva/SelectSize';
import SelectColor from './createArtCanva/SelectColor';
import Canva from './createArtCanva/Canva';
import Button from './common/Button';
import ShareArt from './ShareArt/ShareArt';

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
            return <ShareArt onBack={this.onResult} />
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