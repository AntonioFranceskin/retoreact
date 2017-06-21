import React, { Component } from 'react';



function Card(props) {
  return (
    <div>
      <h1 className="well row  col-md-offset-1"> {props.elemento}    </h1>      
          <div className="col-md-offset-1 col-md-2 text-center">
            <button className='btn btn-fab btn-success ' onClick={() => props.four(props)} > 4 </button>     
          </div>
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.two(props)} > 2 </button>     
          </div> 
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.three(props)} > 3 </button>     
          </div>
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.one(props)} > 1 </button>     
          </div>
    </div> 
    );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cola0:['a','b','c','d','e'],
      cola1:[],
      cola2:[],
      cola3:[],
      cola4:[],
      seguimiento:[],
      seguimiento1:[],
      seguimiento2:[],
      seguimiento3:[]
    }
    this.four = this.four.bind(this);
    this.three = this.three.bind(this);
    this.two = this.two.bind(this);
    this.one = this.one.bind(this);

  }

four(props) {
    switch (props.cola) {
        case "cola0":
            const seguimiento = [4,...this.state.seguimiento];  
            this.setState({seguimiento});
            console.log(seguimiento[0], seguimiento[1], seguimiento[2], seguimiento[3] , seguimiento.length );
            if (seguimiento.length == 4)  {  
                console.log("ENTRE0" );
               if (seguimiento[0] == "1" && seguimiento[1] == "2" && seguimiento[2] == "3" && seguimiento[3] == "4") { 
                  console.log("ENTRE 1234" );    
                  const [primer, ...cola0] = this.state.cola0;
                  const cola1 = [primer,...this.state.cola1];
                  const seguimiento = [];                
                  this.setState({seguimiento});
                  this.setState({cola0});                    
                  this.setState({cola1});        
                } else {
                  console.log("ENTRE Limpiar" );  
                  const seguimiento = [];  
                  this.setState({seguimiento});
                }

            }

            break;
        case "cola1":
            const seguimiento1 = [4,...this.state.seguimiento1];  
            this.setState({seguimiento1}); 
            if (seguimiento1.length == 4)  {
               if (seguimiento1[0] == "1" && seguimiento1[1] == "2" && seguimiento1[2] == "3" && seguimiento1[3] == "4") {             
                const [primer, ...cola1] = this.state.cola1;
                const cola2 = [primer,...this.state.cola2];
                const seguimiento1 = [];                
                this.setState({seguimiento1});
                this.setState({cola1});                    
                this.setState({cola2}); 
                } else {
                  // console.log("ENTRE Limpiar" );  
                  const seguimiento1 = [];  
                  this.setState({seguimiento1});
                }                 
            }  

            break;
        case "cola2":
            const seguimiento2 = [4,...this.state.seguimiento2];  
            this.setState({seguimiento2}); 
            if (seguimiento2.length == 4)  {
               if (seguimiento2[0] == "1" && seguimiento2[1] == "2" && seguimiento2[2] == "3" && seguimiento2[3] == "4") {              
                const [primer, ...cola2] = this.state.cola2;
                const cola3 = [primer,...this.state.cola3];
                const seguimiento2 = [];                
                this.setState({seguimiento2});
                this.setState({cola2});                    
                this.setState({cola3});
                } else {
                  const seguimiento2 = [];  
                  this.setState({seguimiento2});
                }                     
            } 

            break;
        case "cola3":
            const seguimiento3 = [4,...this.state.seguimiento3];  
            this.setState({seguimiento3}); 
            if (seguimiento3.length == 4)  {
               if (seguimiento3[0] == "1" && seguimiento3[1] == "2" && seguimiento3[2] == "3" && seguimiento3[3] == "4") {               
                const [primer, ...cola3] = this.state.cola3;
                const cola4 = [primer,...this.state.cola4];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola3});                    
                this.setState({cola4}); 
                } else {
                  const seguimiento3 = [];  
                  this.setState({seguimiento3});
                }  
            } 

            break;
    }
  }


three(props) {
    switch (props.cola) {
        case "cola0":
            const seguimiento = [3,...this.state.seguimiento];  
            this.setState({seguimiento});
            console.log(seguimiento[0], seguimiento[1], seguimiento[2], seguimiento[3] , seguimiento.length );         
            if (seguimiento.length == 4)  {
               if (seguimiento[0] == "1" && seguimiento[1] == "2" && seguimiento[2] == "3" && seguimiento[3] == "4") { 
                console.log("ENTRE 1234" );                                         
                const [primer, ...cola0] = this.state.cola0;
                const cola1 = [primer,...this.state.cola1];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola0});                    
                this.setState({cola1});
                } else {
                  console.log("ENTRE Limpiar" );  
                  const seguimiento = [];  
                  this.setState({seguimiento});
                }                                               
            }               
            break;
        case "cola1":
            const seguimiento1 = [3,...this.state.seguimiento1];  
            this.setState({seguimiento1}); 
            if (seguimiento1.length == 4)  {
               if (seguimiento1[0] == "1" && seguimiento1[1] == "2" && seguimiento1[2] == "3" && seguimiento1[3] == "4") { 
                const [primer, ...cola1] = this.state.cola1;
                const cola2 = [primer,...this.state.cola2];
                const seguimiento1 = [];                
                this.setState({seguimiento1});
                this.setState({cola1});                    
                this.setState({cola2});
                } else {
                  // console.log("ENTRE Limpiar" );  
                  const seguimiento1 = [];  
                  this.setState({seguimiento1});
                }                   
            }                   
            break;
        case "cola2":
            const seguimiento2 = [3,...this.state.seguimiento2];  
            this.setState({seguimiento2});
            if (seguimiento2.length == 4)  {
               if (seguimiento2[0] == "1" && seguimiento2[1] == "2" && seguimiento2[2] == "3" && seguimiento2[3] == "4") { 
                const [primer, ...cola2] = this.state.cola2;
                const cola3 = [primer,...this.state.cola3];
                const seguimiento2 = [];                
                this.setState({seguimiento2});
                this.setState({cola2});                    
                this.setState({cola3});
                } else {
                  const seguimiento2 = [];  
                  this.setState({seguimiento2});
                }                   
            }           
            break;
        case "cola3":
            const seguimiento3 = [3,...this.state.seguimiento3];  
            this.setState({seguimiento3});
            if (seguimiento3.length == 4)  {
                if (seguimiento3[0] == "1" && seguimiento3[1] == "2" && seguimiento3[2] == "3" && seguimiento3[3] == "4") { 
                const [primer, ...cola3] = this.state.cola3;
                const cola4 = [primer,...this.state.cola4];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola3});                    
                this.setState({cola4});
                } else {
                  const seguimiento3 = [];  
                  this.setState({seguimiento3});
                }                  
            }       
            break;
    }
  }




two(props) {
    switch (props.cola) {
        case "cola0":
            const seguimiento = [2,...this.state.seguimiento];  
            this.setState({seguimiento});
            console.log(seguimiento[0], seguimiento[1], seguimiento[2], seguimiento[3] , seguimiento.length );       
            if (seguimiento.length == 4)  { 
               if (seguimiento[0] == "1" && seguimiento[1] == "2" && seguimiento[2] == "3" && seguimiento[3] == "4") { 
                console.log("ENTRE 1234" );                                        
                const [primer, ...cola0] = this.state.cola0;
                const cola1 = [primer,...this.state.cola1];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola0});                    
                this.setState({cola1});
                } else {
                  console.log("ENTRE Limpiar" );  
                  const seguimiento = [];  
                  this.setState({seguimiento});
                }                 
              }
            break;
        case "cola1":
            const seguimiento1 = [2,...this.state.seguimiento1];  
            this.setState({seguimiento1});
            if (seguimiento1.length == 4)  {
               if (seguimiento1[0] == "1" && seguimiento1[1] == "2" && seguimiento1[2] == "3" && seguimiento1[3] == "4") { 
                const [primer, ...cola1] = this.state.cola1;
                const cola2 = [primer,...this.state.cola2];
                const seguimiento1 = [];                
                this.setState({seguimiento1});
                this.setState({cola1});                    
                this.setState({cola2});
                } else {
                  // console.log("ENTRE Limpiar" );  
                  const seguimiento1 = [];  
                  this.setState({seguimiento1});
                }                   
            }  

            break;
        case "cola2":
            const seguimiento2 = [2,...this.state.seguimiento2];  
            this.setState({seguimiento2});
            if (seguimiento2.length == 4)  {
               if (seguimiento2[0] == "1" && seguimiento2[1] == "2" && seguimiento2[2] == "3" && seguimiento2[3] == "4") { 
                const [primer, ...cola2] = this.state.cola2;
                const cola3 = [primer,...this.state.cola3];
                const seguimiento2 = [];                
                this.setState({seguimiento2});
                this.setState({cola2});                    
                this.setState({cola3});
                } else {
                  const seguimiento2 = [];  
                  this.setState({seguimiento2});
                }                   
            } 

            break;
        case "cola3":
            const seguimiento3 = [2,...this.state.seguimiento3];  
            this.setState({seguimiento3}); 
            if (seguimiento3.length == 4)  {
               if (seguimiento3[0] == "1" && seguimiento3[1] == "2" && seguimiento3[2] == "3" && seguimiento3[3] == "4") { 
                const [primer, ...cola3] = this.state.cola3;
                const cola4 = [primer,...this.state.cola4];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola3});                    
                this.setState({cola4});
                } else {
                  const seguimiento3 = [];  
                  this.setState({seguimiento3});
                }                  
            } 
            break;
    }
  }

one(props) {
    switch (props.cola) {
        case "cola0":
            const seguimiento = [1,...this.state.seguimiento];  
            this.setState({seguimiento});
            console.log(seguimiento[0], seguimiento[1], seguimiento[2], seguimiento[3] , seguimiento.length );          
            if (seguimiento.length == 4)  {
               if (seguimiento[0] == "1" && seguimiento[1] == "2" && seguimiento[2] == "3" && seguimiento[3] == "4") {  
                console.log("ENTRE 1234" );                                          
                const [primer, ...cola0] = this.state.cola0;
                const cola1 = [primer,...this.state.cola1];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola0});                    
                this.setState({cola1});
                } else {
                  console.log("ENTRE Limpiar" );  
                  const seguimiento = [];  
                  this.setState({seguimiento});
                }                 
              }

            break;
        case "cola1":
            const seguimiento1 = [1,...this.state.seguimiento1];  
            this.setState({seguimiento1});
            if (seguimiento1.length == 4)  {
               if (seguimiento1[0] == "1" && seguimiento1[1] == "2" && seguimiento1[2] == "3" && seguimiento1[3] == "4") { 
                const [primer, ...cola1] = this.state.cola1;
                const cola2 = [primer,...this.state.cola2];
                const seguimiento1 = [];                
                this.setState({seguimiento1});
                this.setState({cola1});                    
                this.setState({cola2});
                } else {
                  // console.log("ENTRE Limpiar" );  
                  const seguimiento1 = [];  
                  this.setState({seguimiento1});
                }                   
            } 

            break;
        case "cola2":
            const seguimiento2 = [1,...this.state.seguimiento2];  
            this.setState({seguimiento2});
            if (seguimiento2.length == 4)  {
               if (seguimiento2[0] == "1" && seguimiento2[1] == "2" && seguimiento2[2] == "3" && seguimiento2[3] == "4") {              
                const [primer, ...cola2] = this.state.cola2;
                const cola3 = [primer,...this.state.cola3];
                const seguimiento2 = [];                
                this.setState({seguimiento2});
                this.setState({cola2});                    
                this.setState({cola3});
                } else {
                  const seguimiento2 = [];  
                  this.setState({seguimiento2});
                }                   
            } 

            break;
        case "cola3":
            const seguimiento3 = [1,...this.state.seguimiento3];  
            this.setState({seguimiento3});
            if (seguimiento3.length == 4)  {
               if (seguimiento3[0] == "1" && seguimiento3[1] == "2" && seguimiento3[2] == "3" && seguimiento3[3] == "4") {               
                const [primer, ...cola3] = this.state.cola3;
                const cola4 = [primer,...this.state.cola4];
                const seguimiento = [];                
                this.setState({seguimiento});
                this.setState({cola3});                    
                this.setState({cola4});
                } else {
                  const seguimiento3 = [];  
                  this.setState({seguimiento3});
                }                  
            } 

            break;
    }
  }



  render() {

    return(
        <div>
        <div className='col-md-10 row'>
            <Card elemento={this.state.cola0} cola={"cola0"} four={this.four} three={this.three} two={this.two}  one={this.one} />  
        </div>

        <div className='col-md-10 row'>
            <Card elemento={this.state.cola1} cola={"cola1"} four={this.four} three={this.three} two={this.two}  one={this.one} />  
        </div>
        <div className='col-md-10 row'>
            <Card elemento={this.state.cola2} cola={"cola2"} four={this.four} three={this.three} two={this.two}  one={this.one} />  
        </div>
        <div className='col-md-10 row'>
            <Card elemento={this.state.cola3} cola={"cola3"} four={this.four} three={this.three} two={this.two}  one={this.one} />  
        </div>
        </div>
        );
  }



}

export default App;
