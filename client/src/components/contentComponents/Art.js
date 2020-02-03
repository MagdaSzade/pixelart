import React from 'react';
import { connect } from 'react-redux';


import { fetchView } from '../../actions';

class Art extends React.Component {
    componentDidMount() {
    //    this.props.fetchView();
    }

    draw() {
        return this.props.viewData.map(row => {
            return row.map(pixel => {
                const myStyle = {backgroundColor: pixel}
                return <div className="grid-element" style={myStyle}></div>;
            })
        })
    }

    render() {
        return (
            <div className="grid">
                {this.draw()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewData: state.viewData
    }
}

export default connect(mapStateToProps, { fetchView })(Art);