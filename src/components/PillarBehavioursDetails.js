import React, { Component } from 'react';
import axios from 'axios';

class PillarBehaviourDetails extends Component{
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

export default PillarBehaviourDetails;