
import React from 'react';
import './App.css';

import { Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
 
import HomePage from './pages/homepage/HomePage';

import Shop from './pages/shoppage/Shop';

import Header from './components/header/Header';

import AuthenticationPage from './pages/authenticationpage/AuthenticationPage';

import { auth } from './firebase/firebase.utils';

import SignIn from './components/siginin/SignIn';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null,
    }
  }

  onSubscriptionAuth = null;

  componentDidMount(){
      this.onSubscriptionAuth = auth.onAuthStateChanged(user=>{
        this.setState({currentUser : user})

        console.log(user);
      })
  }

  componentWillUnmount() {
    this.onSubscriptionAuth();
  }


  render(){
    return (
      <div>
        <Header 
        currentUser = {this.state.currentUser}
        />
          <Switch>
              <Route exact path = '/' component = {HomePage}/>
              <Route path = "/shop" component = {Shop}/>
              <Route path = "/authentication" component = {AuthenticationPage}/>
              <Route path = "/signin" component = {SignIn}/>
          </Switch>
      </div>
     
    );
  }
  
}

export default App;
