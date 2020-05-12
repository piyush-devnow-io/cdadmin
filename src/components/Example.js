import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';

class Example extends React.Component {
  render() {
    return (
      <form>
        <Checkbox name="inputA1" label="Option one" defaultChecked={true} style={{border : '1px solid'}}/>
        <Checkbox name="inputA2" label="Option two" />
        <Checkbox name="inputA3" label="Option three is disabled" disabled={true} />
      </form>
    );
  }
}

export default Example;