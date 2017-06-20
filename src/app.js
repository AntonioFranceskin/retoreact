import React, { Component } from 'react';
import Tweet from './tweet/tweet'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alert: null
    }

    this.changeAlert = this.changeAlert.bind(this);
  }

  changeAlert(newAlert) {
    this.setState({
      alert: newAlert
    })
  }

  renderAlert() {
    if(this.state.alert) {
      return <div className="well">{this.state.alert}</div>
    }
  }

  render() {
    return(
      <div>
        {this.renderAlert()}
        <Tweet changeAlert={this.changeAlert}/>
      </div>
    );
  }
}

export default App;
