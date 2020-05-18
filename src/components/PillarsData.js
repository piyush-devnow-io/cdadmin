import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import PillarsTable from './PillarsTable';
import Link from '@material-ui/core/Link';
import PaginationWidget from './PaginationWidget';
import * as Constants from './constants';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './SearchBar';


class PillarsData extends Component{
  constructor(){
    super();
    this.state = {
      pillars: [],
      pageNumber: 1,
    }
    this.gotoAddPillars = this.gotoAddPillars.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.checkKeyAndFetchData = this.checkKeyAndFetchData.bind(this);

  }

  componentDidMount(){
    this.getUsers();
  }

  gotoAddPillars(){
    this.props.history.push('/pillar/add');
  }
  
  checkKeyAndFetchData(e){
    console.log(e);
    if(e.nativeEvent.key == 'Enter'){
      if(e.target.value == ''){
        this.getUsers();
      }else{
      this.getPillarsWithName(e.target.value);
      }
    }
  }

  getPillarsWithName(searchText){
    axios.post(Constants.cdApiUrl + '/characterdaily/api/search/pillars/' + searchText,{},{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({pillars: response.data.pillars}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }


  getUsers(){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/pillars/' + this.state.pageNumber,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({pillars: response.data.pillars}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  loadNextPage(page){
    var x = this.state.pageNumber ; 
    this.setState({pageNumber: x+1}, () => {
      //console.log(this.state);
      this.getUsers();
    })
  }

  loadPreviousPage(page){
    var x = this.state.pageNumber ; 
    this.setState({pageNumber: x-1}, () => {
      //console.log(this.state);
      this.getUsers();
    })
  }

  render(){
    
  if(this.state.pillars.length == 0){
    return (
      <div>
      <div className="fixed-action-btn">

<Link to="/lesson/add" onClick={this.gotoAddLesson}  className="btn-floating btn-large blue" >
<i className="fa fa-plus"></i>
</Link>
</div>
</div>
    );
  }
    return (
      <div>
        <div>
          
        <div style={{float:"left"}}>        <h3>Pillars</h3></div>
        <SearchAppBar checkKeyAndFetchData={this.checkKeyAndFetchData}/>

      </div>
          <PillarsTable pillarsData={this.state.pillars}/>
          <div className="fixed-action-btn">

          <Grid container spacing={3}>
        <Grid item >
        <PaginationWidget previousPage={this.loadPreviousPage} nextPage={this.loadNextPage}/>  
        </Grid>
        <Grid >
        <Link to="/pillar/add" onClick={this.gotoAddPillars}  className="btn-floating btn-large green">
        <i className="fa fa-plus"></i>
      </Link>
        </Grid>
        </Grid>    </div>

          
      </div>
    )
  }
}

export default PillarsData;