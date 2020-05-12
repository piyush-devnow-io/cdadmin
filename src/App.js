import React, { Component }  from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import LoginTab from './components/LoginForm';
import * as Constants from './components/constants';



class App extends Component{
  constructor(){
    super();
    this.state = {
      accessToken : '',
    }
  }

  componentDidMount(){
    this.setState({accessToken: localStorage.getItem('access_token')}, () => {
      //console.log(this.state);
    })
  }



  render(){
    if(this.state.accessToken == null){
      return (<div>
        <LoginTab/>
    
  </div>)
    }
    return (
      <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    
  </div>
    )
  }
}

export default App;
