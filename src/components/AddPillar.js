import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import * as Constants from './constants';

class AddPillar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }


  addMeetup(newMeetup){
    axios.post(Constants.cdApiUrl +'/characterdaily/api/pillars/', newMeetup, {
      headers: {"Authorization":"Bearer fafadfad"}
  }).then(response => {
      this.props.history.push('/pillars');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    
    var data = new FormData();
    data.append('file',this.state.selectedFile);
    data.append('pillarName',this.refs.name.value);

    this.addMeetup(data);
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

  render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{height:"300px",width:"450px",maxHeight:"300px",maxWidth:"450px"}}/>);
    }
    return (
     <div>
        <br />
       <Link className="btn grey" to="/pillars" href="/pillars">Back</Link>
       <h3>Add Pillar</h3>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
            {$imagePreview}
            <input ref="file" type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
          </div>

          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddPillar;