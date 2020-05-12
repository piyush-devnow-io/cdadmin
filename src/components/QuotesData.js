import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import QuotesTable from './QuotesTable';
import * as Constants from './constants';


class QuotesData extends Component{
  constructor(){
    super();
    this.state = {
      quotes: []
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  

  getUsers(){
    axios.get(Constants.cdApiUrl +'/characterdaily/api/quotes/1',{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({quotes: response.data.quotes}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    
  if(this.state.quotes.length == 0){
    return (
        <div></div>
    );
  }
    return (
      <div>
        <h3>Quotes</h3>
      
          <QuotesTable quotesData={this.state.quotes}/>
        
      </div>
    )
  }
}

export default QuotesData;