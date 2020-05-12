import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import PillarsTable from './PillarsTable';
import TextField from '@material-ui/core/TextField';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import PillarMetaData from './PillarMetadata';
import Link from '@material-ui/core/Link';
import * as Constants from './constants';

class LessonDetail extends Component{
  constructor(){
    super();
    this.state = {
      lessonName : "",
      lessonId : "",
      imageUrl : "",
      lessonText : "",
      file: '',
      imagePreviewUrl: '',
      pillars:[],
      grade:"",
      pillarsMetadata : [],
      names:[],
      editMode: false,
      selectedPillars: [],
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  updatePillar(pillarData){
    var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    axios.put(Constants.cdApiUrl + '/characterdaily/api/pillars/pillarById/' + id, pillarData, {
      headers: {"Authorization":"Bearer fafadfad"}
  }).then(response => {
      this.props.history.push('/pillars');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    
    var data = new FormData();
    data.append('file',this.state.selectedFile);
    data.append('pillarName',this.refs.name.value);

    this.updatePillar(data);
    e.preventDefault();
  }

  onFileChangeHandler = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
    e.preventDefault();
    this.setState({
        selectedFile: e.target.files[0]
    });
    
   };

   setEditMode = () => {
    this.setState({
      editMode: true,
  });
   }

   cancelEditMode = () => {
    this.setState({
      editMode: false,
  });
   }

   updateLesson(){

   }
   

   storeSelectedPillars = (e) => {
    this.setState({
      selectedPillars: e.target.value,
  });
   }

  getUsers(){
    var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    axios.get(Constants.cdApiUrl + '/characterdaily/api/lessons/lessonById/' + id,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        
        this.setState({lessonName: response.data.lessonName,
                        lessonText : response.data.lessonText,
                        imageUrl : response.data.imageUrl,
                        imagePreviewUrl : response.data.imageUrl,
                        pillars: response.data.pillarMetaData,
                        grade : response.data.grade,
        }
        , () => {
          //console.log(this.state);
          
        })

        
       
    })
    .catch(err => console.log(err));


    axios.get(Constants.cdApiUrl +'/characterdaily/api/pillars/pillarsMetadata/1',{headers: {"Authorization":"Bearer fafadfad"}})
    .then(response => {
      
      var x = response.data;
      var a = new Array();
      for(var i=0;i<x.length;i++){
        a.push(x[i].pillarName);
      }
      

      this.setState({pillarsMetadata : response.data,
        names : a,
      }
      
      , () => {
        //console.log(this.state);
        
      })

      
     
  })
  .catch(err => console.log(err));

    
      
  }



  render(){
    

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<div><img src={imagePreviewUrl} /></div>);
    }

    if(this.state.editMode == true)
    {
      return (
        <div >
            <Grid container spacing={10}>
            <Grid item xs={9}>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
              <Input placeholder="Input 2" defaultValue={this.state.lessonName} />
              </div>
              <Textarea placeholder="Input 2" defaultValue={this.state.lessonText} />
              <br></br><br></br>
              <input type="submit" value="Save" className="btn" onClick={this.updateLesson}/>
            </form>
            </Grid>
            <Grid item xs={3}>
              <div style={{marginTop:'50px'}}>
                <div style={{marginBottom:'10px'}}>Grade : {this.state.grade}</div>
            {$imagePreview}
                <input ref="file" type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                </div>
                <PillarMetaData pillars={this.state.pillars} allPillars={this.state.pillarsMetadata} names={this.state.names} editMode={this.state.editMode} storeSelectedPillars={this.storeSelectedPillars}/>
                <Link to="/pillar/add"   className="btn-floating btn-small blue" onClick={this.cancelEditMode} style={{marginTop:'8px'}}>
    
            <i className="fa fa-cut"></i>
          </Link>
            </Grid>
            </Grid>
            </div>
        )
    }
    else {
    return (
    <div >
        <Grid container spacing={10}>
        <Grid item xs={9}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
          <Input placeholder="Input 2" defaultValue={this.state.lessonName} />
          </div>
          <Textarea placeholder="Input 2" defaultValue={this.state.lessonText} />
          <br></br><br></br>
          <input type="submit" value="Save" className="btn" onClick={this.updateLesson}/>
        </form>
        </Grid>
        <Grid item xs={3}>
          <div style={{marginTop:'50px'}}>
            <div style={{marginBottom:'10px'}}>Grade : {this.state.grade}</div>
        {$imagePreview}
            <input ref="file" type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
            </div>
            <PillarMetaData pillars={this.state.pillars} allPillars={this.state.pillarsMetadata} names={this.state.names} editMode={this.state.editMode} storeSelectedPillars={this.storeSelectedPillars}/>
            <Link to="/pillar/add"   className="btn-floating btn-small blue" onClick={this.setEditMode}>

        <i className="fa fa-edit"></i>
      </Link>
        </Grid>
        </Grid>
        </div>
    )
    }
  }
}

export default LessonDetail;