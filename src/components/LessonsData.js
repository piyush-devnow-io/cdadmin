import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import LessonsTable from './LessonsTable';
import {Link} from 'react-router-dom';
import * as Constants from './constants';
import Grid from '@material-ui/core/Grid';
import PaginationWidget from './PaginationWidget';
import SearchAppBar from './SearchBar';

class LessonsData extends Component{
  constructor(){
    super();
    this.state = {
      lessons: [],
      pageNumber: 1,
    }
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.checkKeyAndFetchData = this.checkKeyAndFetchData.bind(this);

  }


  checkKeyAndFetchData(e){
    console.log(e);
    if(e.nativeEvent.key == 'Enter'){
      if(e.target.value == ''){
        this.getUsers();
      }else{
      this.getLessonsWithName(e.target.value);
      }
    }
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
  

  componentDidMount(){
    this.getUsers();
  }

  gotoAddLesson(){
    this.props.history.push('/lesson/add');
  }
  

  getUsers(){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/lessons/' + this.state.pageNumber,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({lessons: response.data.lessons}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  getLessonsWithName(searchText){
    axios.post(Constants.cdApiUrl + '/characterdaily/api/search/lessons/' + searchText,{},{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({lessons: response.data.lessons}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    
  if(this.state.lessons.length == 0){
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
        <div style={{float:"left"}}>        <h3>Lessons</h3></div>
        <SearchAppBar checkKeyAndFetchData={this.checkKeyAndFetchData}/>

          <LessonsTable lessonsData={this.state.lessons}/>
          <div className="fixed-action-btn">

          <Grid container spacing={3}>
        <Grid item >
        <PaginationWidget previousPage={this.loadPreviousPage} nextPage={this.loadNextPage}/>  
        </Grid>
        <Grid >
        <Link to="/lesson/add" onClick={this.gotoAddLesson}  className="btn-floating btn-large blue" >
        <i className="fa fa-plus"></i>
      </Link>
        </Grid>
        </Grid> 


         
      </div>
      </div>
    )
  }
}

export default LessonsData;