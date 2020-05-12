import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import PillarsTable from './PillarsTable';
import Link from '@material-ui/core/Link';
import PaginationWidget from './PaginationWidget';
import * as Constants from './constants';


class PillarsData extends Component{
  constructor(){
    super();
    this.state = {
      pillars: []
    }
    this.gotoAddPillars = this.gotoAddPillars.bind(this);
  }

  componentDidMount(){
    this.getUsers();
  }

  gotoAddPillars(){
    this.props.history.push('/pillar/add');
  }
  

  getUsers(){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/pillars/1',{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({pillars: response.data.pillars}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    
  if(this.state.pillars.length == 0){
    return (
        <div></div>
    );
  }
    return (
      <div>
        <div>
          
        <h3>Pillars</h3>
      </div>
          <PillarsTable pillarsData={this.state.pillars}/>
          <div className="fixed-action-btn">
            
      <Link to="/pillar/add" onClick={this.gotoAddPillars}  className="btn-floating btn-large blue">
        <i className="fa fa-plus"></i>
      </Link>
      
    </div>
      </div>
    )
  }
}

export default PillarsData;