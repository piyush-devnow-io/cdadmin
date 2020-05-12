import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import PillarsTable from './PillarsTable';
import Link from '@material-ui/core/Link';
import * as Constants from './constants';


class PillarDetails extends Component{
  constructor(){
    super();
    this.state = {
      pillarName : "",
      imageUrl : "",
      file: '',
      imagePreviewUrl: ''
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  updatePillar(pillarData){
    var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    axios.put(Constants.cdApiUrl +'/characterdaily/api/pillars/pillarById/' + id, pillarData, {
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

  

  getUsers(){
    var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    axios.get(Constants.cdApiUrl +'/characterdaily/api/pillars/pillarById/' + id,{headers: {"Authorization":"Bearer fafadfad"}})
      .then(response => {
        
        this.setState({pillarName: response.data.pillarName,
                        imageUrl : response.data.imageUrl,
                        imagePreviewUrl : response.data.imageUrl,
        }, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
  
    return (
      
      <div>
        <br />
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.pillarName}/>
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

export default PillarDetails;