import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null,
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`))
  };

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton() {
    if (this.state.user) {
      return(
        <div className="App-user">
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    } else {
      return(
        <button onClick={this.handleAuth}>Login with Google</button>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This is my first App whit React!
          </h1>
        </header>
        <section className="App-intro">
          {this.renderLoginButton()}
        </section>
      </div>
    );

  }

}

export default App;
