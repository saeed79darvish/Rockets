import React, {Fragment} from 'react';
import Logo from './logo.png'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './launches.jsx';
import './App.css';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})


class App extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
                
                <div className="container">
                    <img src={Logo} style={{
                       
                        width: 400,
                        display: 'block',
                        margin: 'auto'
                      
                    }} />

                </div>
                <div className="App">
                <Launches />
                   </div>
                  
                    
            </ApolloProvider>);
    }
}

export default App;