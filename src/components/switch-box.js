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
    let boxDiv = <div></div>
    let resultsDiv = <div></div>
    let actionButton = <div></div>

    if (this.state.isComplete) {
      if  (this.state.hasClicked) {
        boxDiv = <div className='redBox'><p className='checked'>&#x2713;</p></div>;
        resultsDiv = <div className='results'><p>{this._latency()} ms</p></div>
        actionButton = <div><p><button onClick={this._reset.bind(this)}>TRY AGAIN!</button></p></div>
      }
      else {
        // wonder if should detect key press instead of click
        boxDiv = <div className='redBox' onClick={this._record_click.bind(this)}></div>;
      }
    } else {
      boxDiv = <div className='greenBox'></div>;
      actionButton = <div><p><button onClick={this._finish.bind(this)}>GO!</button></p></div>
    }

    return(
      <div>
        {boxDiv}
        {resultsDiv}
        {actionButton}
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
    console.log('startTime:', this.startTime);
  }

  _stop_timer() {
    this.stopTime = performance.now();
    console.log('stopTime', this.stopTime);
  }

  _reset() {
    this.startTime = null;
    this.stopTime = null;
    this.setState({
      hasClicked: false
    });
    this.setState({
      isComplete: false
    });
  }

  _timeout() {
    // maybe have some random timeout between green and red states
  }

  _countdown() {
    // maybe have a countdown before the test starts
  }

  _latency() {
    return (this.stopTime - this.startTime).toFixed(2)
  }

  _record_click() {
    this._stop_timer();
    this.setState({
      hasClicked: true
    });
  }
}
