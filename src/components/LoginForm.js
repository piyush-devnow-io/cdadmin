import React,{Component} from "react";
import "./Login.css";
import axios from 'axios';
import * as Constants from './constants';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

class LoginTab extends Component{

  constructor(props) {
    super(props);
    this.state = {
        invalidCredentials : false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  
  handleClose(){
    this.setState({invalidCredentials: false}, () => {
        //console.log(this.state);
      })
  }

   handleSubmit(event) {
    event.preventDefault();
    var userName = document.getElementById('username').value;
    var password = document.getElementById('passwd').value;
    var data = {
        "email":userName,
        "password":password,
        "grantType":"password"
    }
    axios.post(Constants.authUrl + "/auth/login", data).then(response => {
        console.log(response);
        localStorage.setItem('access_token',response.data.accessToken);
      //this.props.history.push('/');
      window.location.reload(true);
    }).catch(err => {
        //var message = err.data.message;
        //if(message == 'Bad credentials'){
            this.setState({invalidCredentials: true}, () => {
                //console.log(this.state);
              })
        //}
    });
  }

  render(){
  return (
    <div>
        <div className="container">
<div id="login" className="signin-card">
  <div className="logo-image">
  </div>
  <h1 className="display1" style={{textAlign:"center"}}><b>CharacterDaily Admin</b></h1>
  <form action="" method="" className="" role="form" style={{marginTop:"8%"}}>
    <div id="form-login-username" className="form-group">
      <input id="username" className="form-control" name="username" type="text" size="18" alt="" required />
      <span className="form-highlight"></span>
      <span className="form-bar"></span>
    </div>
    <div id="form-login-password" className="form-group">
      <input id="passwd" className="form-control" name="password" type="password" size="18" alt="password" required/>
      <span className="form-highlight"></span>
      <span className="form-bar"></span>
    </div>
    <div id="form-login-remember" className="form-group">
      <div className="checkbox checkbox-default">       
          <input id="remember" type="checkbox" value="yes" alt="Remember me" className=""/>
          <label for="remember">Remember me</label>      
      </div>
    </div>
    <div>
      <button className="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="sign in" onClick={this.handleSubmit}>Sign in</button>  
	  </div>
</form>
    </div>
    </div>
    <Snackbar open={this.state.invalidCredentials} autoHideDuration={6000} onClose={this.handleClose}>
    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
          Invalid Credentials
        </MuiAlert>
      </Snackbar>
    </div>
  );
  }
}

export default LoginTab;