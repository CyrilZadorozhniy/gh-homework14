import React from 'react';
import HeaderSite from './Header';
import FooterSite from './Footer';
import ContentSite from './Content';
import Map from './Map.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderSite/>
                <ContentSite/>
                <FooterSite/>
                <Map/>
            </div>
        )
    }
}
export default App