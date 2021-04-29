import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import * as queries from './graphql/queries';

Amplify.configure(aws_exports);



class App extends Component {

  state = { grantedBPMExchanges : [] }
  async componentDidMount() {
    const currentUser = await Auth.currentAuthenticatedUser();
    const grantedExchangeData = await API.graphql({query: queries.memberByUsername, variables: {username: currentUser.username}})
    this.setState({ grantedBPMExchanges : grantedExchangeData.data.memberByUsername.items})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {
          this.state.grantedBPMExchanges.map((grantedExchange, i) => (
            <div>
              <h3>{grantedExchange.username}</h3>
            </div>
          ))
        }
      </div>
    );
  }
}

export default withAuthenticator(App, true);
