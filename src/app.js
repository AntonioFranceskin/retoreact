import React, { Component } from 'react';
import Card from './card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats:[],
      no_cats:[],
      yes_cats:[]
    }
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  componentWillMount() {
    const cats = tumblr_api_read.posts.map((el) => el['photo-url-400']);
    this.setState({cats});
  }

  dislike() {
    const [disliked, ...cats] = this.state.cats;
    const no_cats = [disliked, ...this.state.no_cats];
    this.setState({cats, no_cats});
  }

  like() {
    const [liked, ...cats] = this.state.cats;
    const yes_cats = [liked, ...this.state.yes_cats];
    this.setState({cats, yes_cats});
  }

  render() {
    return(
      <div className='row'>
        <div className='col-md-3'>
          {this.state.no_cats.map((el) => <Card url={el}/>)}
        </div>
        <div className='col-md-4 col-md-offset-1'>
          <Card url={this.state.cats[0]} like={this.like} dislike={this.dislike}/>
        </div>
        <div className='col-md-3 col-md-offset-1'>
          {this.state.yes_cats.map((el) => <Card url={el}/>)}
        </div>
      </div>
    );
  }
}

export default App;
