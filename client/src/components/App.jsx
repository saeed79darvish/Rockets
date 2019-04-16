import React from 'react';
import Logo from './logo.png'


class App extends React.Component {

    render() {
        return (<div>
            <img src={Logo} style={{
                width: 400,
                display: 'block',
                margin: 'auto',
                padding: '10px'
            }} />

        </div>);
    }
}

export default App;