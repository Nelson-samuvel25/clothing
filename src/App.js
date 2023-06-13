
import React from 'react';
import './App.css';

import { Route,Switch,Redirect } from 'react-router-dom/cjs/react-router-dom.min';
 
import HomePage from './pages/homepage/HomePage';

import Shop from './pages/shoppage/Shop';

import Header from './components/header/Header';

import AuthenticationPage from './pages/authenticationpage/AuthenticationPage';

import CheckOut from './pages/checkoutpage/CheckOut';

import { auth ,userProfileDoc} from './firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user-action';

import { selectCurrentUser } from './redux/user/user-selector';

import { createStructuredSelector } from 'reselect';









class App extends React.Component {


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

      const {setCurrentUser} = this.props;

      this.onSubscriptionAuth = auth.onAuthStateChanged(async(userAuth)=>{


      if(userAuth){
          const userRef = await userProfileDoc(userAuth);

          userRef.onSnapshot(snapshot=>{
            setCurrentUser({
                id : snapshot.id,
                ...snapshot.data(),
              })
          })
        }
        else{
          setCurrentUser(userAuth)   
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
      
        />
          <Switch>
              <Route exact path = '/' component = {HomePage}/>
              <Route path = "/shop" component = {Shop}/>
              <Route exact path = "/checkout" component = {CheckOut}/>
              <Route exact path = "/authentication" render={() => this.props.currentUser ? (<Redirect to="/" />):(<AuthenticationPage/>)}/>
          </Switch>
      </div>
     
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser : (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
