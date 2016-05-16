import React from 'react';

export default class SwitchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      isComplete: false,
      hasClicked: false
    };

    this.startTime = null;
    this.stopTime = null;
  }

  componentWillMount() {
    // setTimeout(() => {this._finish()}, 10000)
  }

  render() {
    let boxDiv;

    if (this.state.isComplete) {
      boxDiv = <div className='redBox' onClick={this._record_click.bind(this)}></div>;
    } else {
      boxDiv = <div className='greenBox'></div>;
    }

    return(
      <div>
        {boxDiv}
      </div>
    );
  }

  _finish() {
    this.setState({
      isComplete: true
    });
    this._start_timer();
  }

  _start_timer() {
    this.startTime = performance.now();
    console.log(this.startTime);
  }

  _stop_timer() {
    this.stopTime = performance.now();
    console.log(this.stopTime);
  }

  _reset() {
  }

  _timeout() {
  }

  _latency() {
    return this.stopTime - this.startTime
  }

  _record_click() {
    this.setState({
      hasClicked: true
    });
    // todo: return if hasClicked is already true
    this._stop_timer();
  }
}
