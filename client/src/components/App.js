import React from 'react';

import HeaderBar from './headerComponents/HeaderBar';
import FooterBar from './footerComponents/FooterBar';
import Content from './contentComponents/Content';

import '../styles/styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="conteiner">
                <HeaderBar />
                <Content />
                <FooterBar />
            </div>
        );
    }
}

export default App;