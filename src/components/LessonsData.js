import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import LessonsTable from './LessonsTable';
import {Link} from 'react-router-dom';
import * as Constants from './constants';


class LessonsData extends Component{
  constructor(){
    super();
    this.state = {
      lessons: []
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  gotoAddLesson(){
    this.props.history.push('/lesson/add');
  }
  

  getUsers(){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/lessons/1',{headers: {"Authorization":"Bearer fafadfad"}})
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
        <div></div>
    );
  }
    return (
      <div>
        <div style={{float:"left"}}>        <h3>Lessons</h3></div>
        <div style={{maxWidth:'800px', minWidth : '400px', float:"right" , marginTop:"10px"}}> 
        <input
         placeholder="Search keyword and press Enter"
       />  
       </div> 
          <LessonsTable lessonsData={this.state.lessons}/>
          <div className="fixed-action-btn">

          <Link to="/lesson/add" onClick={this.gotoAddLesson}  className="btn-floating btn-large blue" >
        <i className="fa fa-plus"></i>
      </Link>
      </div>
      </div>
    )
  }
}

export default LessonsData;