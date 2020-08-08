import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {useStateValue} from './components/StateProvider';
import {auth} from './components/Firebase';
function App() {
   const [{}, dispatch] = useStateValue();
  
   useEffect(() => {
     const unSubscribe=auth.onAuthStateChanged((authUser)=>{
       if(authUser){
           dispatch({
             type:'SET_USER',
             user:authUser 
           });
       }else{
          dispatch({
          type:'SET_USER',
          user:null 
        });
       }
     });

     return ()=>{
      unSubscribe();
     };
     
  }, []);
  

  return (
    
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>  
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route> 
        <Route path="/">
        <Header/>
         <Home/>
        </Route> 
      </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;
