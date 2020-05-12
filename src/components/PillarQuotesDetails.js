import React, { Component } from 'react';
import axios from 'axios';

class PillarQuotesDetails extends Component{
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

export default PillarQuotesDetails;