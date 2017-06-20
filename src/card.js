import React, { Component } from 'react';

class Card extends Component {
   constructor(props) {
       super(props);
       console.log('DESDE EL CONSTRUCTOR');
   }

   componentWillMount() {
       console.log('DESDE WILLMOUNT');
   }

   shouldComponentUpdate() {
       console.log('DESDE SHOULDUPDATE');
       return true;
   }

   componentWillUpdate() {
       console.log('DESDE WILLUPDATE');
   }

   componentWillReceiveProps() {
       console.log('PROPS WILLRECEIVE!');
   }

   _cardButtons() {
        if(!this.props.like) {
            return '';
        }
        return(
            <div className="row">
                <div className="col-md-6 text-center">
                <button className='btn btn-fab btn-danger' onClick={this.props.dislike}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
                </div>
                <div className="col-md-6 text-center">
                <button className='btn btn-fab btn-success' onClick={this.props.like}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>
                </div>
            </div>
        );
   }

   render() {
        console.log('PINTANDO COMPONENTE!');
        return (
            <div className='well col-md-12'>
                <img src={this.props.url} className='img-responsive'/>
                {this._cardButtons()}
            </div>
        );
   }

   componentDidMount() {
       console.log('DESDE DIDMOUNT');
   }

   componentDidUpdate() {
       console.log('DESDE DIDUPDATE');
   }
}


export default Card;