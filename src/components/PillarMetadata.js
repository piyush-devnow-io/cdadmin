import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import CheckBox from './Checkbox';
import Example from './Example';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import * as Constants from './constants';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

 
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  function getCheckedStatus () {
    var pillarId = '1';
    var list = props.allPillars;
    var selectedPillars = props.selectedPillars;
    for (var index = 0; index < selectedPillars.length; index++) { 
      if(selectedPillars[index].pillarId == pillarId){
        return true;
      }
    } 
    return false;
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const theme = useTheme();


  return (
    
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Pillars</DialogTitle>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {props.names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  

  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

 
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  function getCheckedStatus () {
    var pillarId = '1';
    var list = props.allPillars;
    var selectedPillars = props.selectedPillars;
    for (var index = 0; index < selectedPillars.length; index++) { 
      if(selectedPillars[index].pillarId == pillarId){
        return true;
      }
    } 
    return false;
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    props.storeSelectedPillars(event);
  };
  const theme = useTheme();

  
 

  if(props.editMode == true){
    return (<div style={{marginTop:'50px'}}>
      Pillars : 
                <br></br>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} style={{maxWidth:'200px'}}/>
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {props.names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>);
  }else{
    return (
      <div>
      <div style={{marginTop:'50px'}}>
                Pillars : 
                <br></br>
              {props.pillars.map((pillar) => (
              
                <Chip style={{marginRight:'5px', marginTop:'5px'}}
          icon={<FaceIcon />}
          label={pillar.pillarName}
       
          color="secondary"
          variant="outlined"
        />
              ))}
              
              </div>
              
              <div style={{marginTop:'10px'}}>
              <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} allPillars={props.allPillars} selectedPillars={props.pillars} names={props.names}/>
  
        
  </div></div>
    );
  }
}
