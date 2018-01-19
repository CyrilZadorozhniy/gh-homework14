import React from 'react';
import HeaderSite from './Header';
import FooterSite from './Footer';
import ContentSite from './Content';

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderSite/>
                <ContentSite/>
                <FooterSite/>
            </div>
        )
    }
}
export default App