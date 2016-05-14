import React from 'react';

export default class SwitchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      isComplete: false
    };
  }

  componentWillMount() {
    setTimeout(() => {this._finish()}, 10000)
  }

  render() {
    let color;

    if (this.state.isComplete) {
      color = 'redBox';
    } else {
      color = 'greenBox';
    }

    return(
      <div className={color}></div>
    );
  }

  _finish() {
    this.setState({
      isComplete: true
    });
  }
}
