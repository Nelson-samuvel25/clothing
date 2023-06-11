
import React from 'react';
import './App.css';

import { Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
 
import HomePage from './pages/homepage/HomePage';

import Shop from './pages/shoppage/Shop';

import Header from './components/header/Header';

import AuthenticationPage from './pages/authenticationpage/AuthenticationPage';

import { auth ,userProfileDoc} from './firebase/firebase.utils';










class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null,
    }
  }

  onSubscriptionAuth = null;

  componentDidMount(){
      // this.onSubscriptionAuth = auth.onAuthStateChanged( async userAuth=>{
      //   if(userAuth){
      //     const userRef = await  createUserProfileDoc(userAuth);

      //     userRef.onSnapshot((snapshot) =>{
      //       this.setState({
      //         currentUser : {
      //           id : snapshot.id,
      //           ...snapshot.data(),
      //         }
      //       },()=>console.log(this.state))
      //     })
      //   }
      //   else{
      //     this.setState({currentUser : userAuth})
      //   }
        
       
      // })


      this.onSubscriptionAuth = auth.onAuthStateChanged(async(userAuth)=>{
      if(userAuth){
          const userRef = await userProfileDoc(userAuth);

          userRef.onSnapshot(snapshot=>{
            this.setState({
              currentUser:{
                id : snapshot.id,
                ...snapshot.data(),
              }
            },()=>console.log(this.state))
          })
        }
        else{
          this.setState({currentUser : userAuth})   
        }
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

      
          </Switch>
      </div>
     
    );
  }
  
}

export default App;
