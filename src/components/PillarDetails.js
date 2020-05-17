import React, { Component } from 'react';
import axios from 'axios';
import EnhancedTable from './EnhancedTable';
import PillarsTable from './PillarsTable';
import Link from '@material-ui/core/Link';
import * as Constants from './constants';
import Input from 'muicss/lib/react/input';


class PillarDetails extends Component{
  constructor(){
    super();
    this.state = {
      pillarName : "",
      imageUrl : "",
      file: '',
      imagePreviewUrl: '',
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);

  }

  componentDidMount(){
    this.getUsers();
  }

  updatePillar(pillarData){
    var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    axios.put(Constants.cdApiUrl +'/characterdaily/api/pillars/' + id, pillarData, {
      headers: {"Authorization":"Bearer fafadfad"}
  }).then(response => {
      this.props.history.push('/pillars');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    
    var data = new FormData();
    data.append('file',this.state.selectedFile);
    data.append('pillarName',this.state.pillarName);

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

  handleNameChange(e){
    var x = e.target.value;
    this.setState({pillarName: x,
    })
  }

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
      $imagePreview = (<img src={imagePreviewUrl} style={{height:"300px",width:"450px",maxHeight:"300px",maxWidth:"450px"}}/>);
    }
  
    return (
      
      <div>
        <br />
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
          <Input placeholder="Input 2" ref="name" defaultValue={this.state.pillarName} onChange={this.handleNameChange}/>
           
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