import React, {Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        {props.message}
      </div>
    );
  }
}

export default Main;
