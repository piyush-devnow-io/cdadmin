import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import * as Constants from './constants';

export default function CheckBox(props) {
    return (
      <div>
      <Checkbox key={props.id} checked={props.isChecked} onChange={props.handleCheckChieldElement} value={props.value}  name={props.value} />
       </div>
    )
}