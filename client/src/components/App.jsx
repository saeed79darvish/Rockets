import React, { Fragment } from 'react';
import Logo from './logo.png'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './launches.jsx';
import Launch from './launch.jsx';
import './App.css';
import Header from './Header.jsx';
import About from './About.jsx';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})


class App extends React.Component {

    render() {
        return (

            <ApolloProvider client={client}>
                <Router>
                    <div className="container">
                        <img src={Logo} style={{

                            width: 400,
                            display: 'block',
                            margin: 'auto'

                        }} />
                        <Header />
                    </div>


                    <div className="App">
                       
                        <Route exact path="/" component={Launches} />
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/launch/:flight_number" component={Launch} />
                    </div>

                </Router>
            </ApolloProvider>);
    }
}

export default App;