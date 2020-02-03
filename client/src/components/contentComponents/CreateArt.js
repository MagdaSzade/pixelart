import React from 'react';

import SelectBox from './SelectBox';
import SelectSizeBox from './SelectSizeBox';
import DrawArt from './DrawArt';

class CreateArt extends React.Component {
    render() {
        return (
            <div>                
                <SelectBox />
                <SelectSizeBox />
                <DrawArt />
            </div>
        );
    }
}

export default CreateArt;