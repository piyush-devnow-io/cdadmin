import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import QuotesTable from './QuotesTable';
import * as Constants from './constants';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import Paper from '@material-ui/core/Paper';

class ResourcesData extends Component{
  constructor(){
    super();
    this.state = {
      selected: "",
    }
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount(){
  }

  

  setSelected(e){
    console.log(e);
  }

  render(){
    
  const bull = <span style={{ display: 'inline-block',margin: '0 2px',transform: 'scale(0.8)'}} >•</span>;
  const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };
    return (
      <MuiThemeProvider >

      <div style={{marginTop:"25px"}}>
        <h3>Resources</h3>
              <Grid container spacing={3} style={{marginTop:"25px"}}>
              <Grid item xs={2}>
              <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon} id="1">
          <FolderIcon onClick={this.setSelected} name="1" id="1"/>
        </IconButton>
       
      </CardContent>
      <CardActions>
      <p>Administrators</p>
      </CardActions>
    </Card>
    <br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>After School Programs..</p>
      </CardActions>
    </Card>
    <br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>Best Practices</p>
      </CardActions>
    </Card><br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>Books-Character Related</p>
      </CardActions>
    </Card><br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>CC! Pledge</p>
      </CardActions>
    </Card><br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>CC! Week and School..</p>
      </CardActions>
    </Card><br></br>
    <Card >
      <CardContent>
        <IconButton iconStyle={styles.largeIcon}>
          <FolderIcon/>
        </IconButton>
      </CardContent>
      <CardActions>
      <p>Newsletters</p>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={10}>
        

        </Grid>
       
        
              
</Grid>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default ResourcesData;