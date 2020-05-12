import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from './constants';

class PillarLesssonrDetails extends Component{
  constructor(){
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount(){
    this.getMeetups();
  }

  getMeetups(){
    
  }

  render(){
   
    return (
      <div>
       
      </div>
    )
  }
}

export default PillarLesssonrDetails;