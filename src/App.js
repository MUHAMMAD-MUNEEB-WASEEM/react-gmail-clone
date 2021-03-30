import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  //Authentication
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      //if user is logged in
      if (user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
  }, [])

  //Importing sendmessage state from redux using selector and passing const value to it which is by default false
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      {!user ? (
      <Login/>
      ):(
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            
            <Route path="/mail">
              <Mail/>
            </Route>
            
            <Route path="/">
              <EmailList/>
            </Route>
          
          </Switch>
        </div>

        {/*if selectsendmessageisopen is true then compose part open otherwise not*/}
        {sendMessageIsOpen && <SendMail/>}
      </div>
      )}
    </Router>
  );
}

export default App;
