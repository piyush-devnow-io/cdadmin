import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileLogoutMenu from './ProfileLogoutMenu';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">CharacterDaily Admin</a>
            <div style={{float:"right",marginRight:"20px"}}>
              <ProfileLogoutMenu/>
            </div>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            
            <ul className="side-nav" id="main-menu">
            <li><Link to="/users"><i className="fa fa-users"></i> Users</Link></li>         

            <li><Link to="/pillars"><i className="fa fa-users"></i> Pillars</Link></li>      
            <li><Link to="/lessons"><i className="fa fa-users"></i> Lessons</Link></li>         
            <li><Link to="/quotes"><i className="fa fa-users"></i> Quotes</Link></li>         
            <li><Link to="/behaviours"><i className="fa fa-users"></i> Behaviours</Link></li>         
   
            <li><Link to="/"><i className="fa fa-users"></i> Schools</Link></li>  
                 
            <li><Link to="/"><i className="fa fa-users"></i> Resources</Link></li>         
  

            <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;