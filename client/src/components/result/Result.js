import React from 'react';

import Display from '../common/Display';
import Button from '../common/Button';
import IsNotPaid from '../common/IsNotPaid';
import Error from '../common/Error';
import { getArt } from '../../api/database';
import { createGivenBoard } from '../../helpers/key';

class Result extends React.Component {
    state = {
        pixels: [],
        width: null,
        height: null,
        isError: false,
        id: "",
        isPaid: false,
    }

    componentDidMount = async () => {
        this.setState({ id: this.props.match.params.id });
        const response = await getArt(this.props.match.params.id);
        if (response && response.data.pixels) {
            const board = createGivenBoard(response.data.pixels, response.data.width);
            const height = response.data.pixels.length/response.data.width;
            this.setState({ pixels: board, width: response.data.width, height: height, isPaid: true });
        } else if (response) {
        } else {
            this.setState({ isError: true });
        }
    }

    componentDidUpdate = async () => {
        console.log(this.state.id);
        if (this.state.pixels.length === 0 && this.state.isPaid) {
            const response = await getArt(this.props.match.params.id);
            if (response && response.data.pixels) {
                const board = createGivenBoard(response.data.pixels, response.data.width);
                const height = response.data.pixels.length/response.data.width;
                this.setState({ pixels: board, width: response.data.width, height: height });
            }
        }
    }

    whatToRender() {
        if (this.state.pixels.length === 0 && !this.state.isError) {
            return <IsNotPaid id={this.state.id} isPaid={this.isPaid} />
        } else if (this.state.isPaid) {
            return  this.result()
        } else {
            return <Error />
        }
    }

    isPaid = () => {
        this.setState({ isPaid: true });
    }

    result() {
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
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.whatToRender()}
                <div>
                    <p>Narysuj coś swojego.</p>
                    <a href="/">
                        <Button text="Narysuj"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Result;