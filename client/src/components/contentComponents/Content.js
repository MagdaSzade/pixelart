import React from 'react';
import { connect } from 'react-redux';

import Art from './Art';
import CreateArt from './CreateArt';

import '../../styles/styles.css';

class Content extends React.Component {

    contentView() {
        if (this.props.actualView === "CREATE_ART") {
            return <CreateArt />
        } else {
            return <Art />
        }
    }

    render() {
        return (
            <div className="bar-out">
                <div className='bar-in'>
                    {this.contentView()}                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        actualView: state.actualView
    };
}
export default connect(mapStateToProps)(Content);