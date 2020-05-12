import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import BehavioursTable from './BehavioursTable';
import * as Constants from './constants';


class BehavioursData extends Component{
  constructor(){
    super();
    this.state = {
      behaviours: []
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  

  getUsers(){
    axios.get(Constants.cdApiUrl +'/characterdaily/api/behaviours/1',{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({behaviours: response.data.behaviours}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    
  if(this.state.behaviours.length == 0){
    return (
        <div></div>
    );
  }
    return (
      <div>
        <h1>Behaviours</h1>
      
          <BehavioursTable behavioursData={this.state.behaviours}/>
        
      </div>
    )
  }
}

export default BehavioursData;