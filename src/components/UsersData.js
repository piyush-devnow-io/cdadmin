import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchAppBar from './SearchBar';
import * as Constants from './constants';

class UsersData extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      pageNumber : 1,
    }
    this.checkKeyAndFetchData = this.checkKeyAndFetchData.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);


  }

  componentDidMount(){
    this.getUsers();
  }

  getUsersWithEmail(email){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/users/getUsersWithEmail/' + email +'/' + this.state.pageNumber,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({users: response.data.users}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  getUsers(){
    axios.get(Constants.cdApiUrl + '/characterdaily/api/users/' + this.state.pageNumber,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        this.setState({users: response.data.users}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  checkKeyAndFetchData(e){
    console.log(e);
    if(e.nativeEvent.key == 'Enter'){
      if(e.target.value == ''){
        this.getUsers();
      }else{
      this.getUsersWithEmail(e.target.value);
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

  render(){
    
const headCells = [
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'edit', numeric: true, disablePadding: false, label: 'Details' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


  
    return (
      <div>
        <ul className="collection">
        <div> 
        <div >
            <div style={{float:"right"}}>
              <SearchAppBar checkKeyAndFetchData={this.checkKeyAndFetchData}/>
            </div>
            
          </div>
       </div> 
        <EnhancedTable headCells={headCells} users={this.state.users} previousPage={this.loadPreviousPage} nextPage={this.loadNextPage}/>
        </ul>
        
      </div>
    )
  }
}

export default UsersData;