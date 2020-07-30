import React from 'react';

import Display from './Display';
import Button from './Button';
import { getArt } from '../api/database';
import { createGivenBoard } from '../helpers/key';

class Result extends React.Component {
    state = {
        pixels: [],
        width: null,
        height: null,
    }

    componentDidMount = async () => {
        const response = await getArt(this.props.match.params.id);
        const board = createGivenBoard(response.pixels, response.width);
        const height = response.pixels.length/response.width;
        console.log(height, response.width)
        this.setState({ pixels: board, width: response.width, height: height });
    }

    render() {
        return (
            <div>
                <div>
                    <p>Zobacz mój pixel art!</p>
                </div>
                <Display 
                    pixels={this.state.pixels}
                    width={this.state.width}
                    height={this.state.height}
                />
                <div>
                    <p>Spróbuj narysować coś swojego.</p>
                    <a href="/">
                        <Button text="Narysuj"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Result;