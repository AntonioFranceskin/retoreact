import React, { Component } from 'react';



function Card(props) {
  return (
    <div>
      <h1 className="well row  col-md-offset-1"> {props.elemento}    </h1>      
          <div className="col-md-offset-1 col-md-2 text-center">
            <button className='btn btn-fab btn-success ' onClick={() => props.click(props, "4")} > 4 </button>     
          </div>
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.click(props, "2")} > 2 </button>     
          </div> 
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.click(props, "3")} > 3 </button>     
          </div>
          <div className="col-md-2 text-center">
            <button className='btn btn-fab btn-success' onClick={() => props.click(props, "1")} > 1 </button>     
          </div>
    </div> 
    );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      cola0:['a','b','c','d','e','f','g','h'],
      //cola0:['a','b'],      
      cola1:[],
      cola2:[],
      cola3:[],
      cola4:[],
      seguimiento:[],
      seguimiento1:[],
      seguimiento2:[],
      seguimiento3:[],
      time1: Date.now(), 
      time4: Date.now() 
    }
    this.click = this.click.bind(this);
  }


click(props,param1) {
      // console.log("prueba1", [1, 2] === [1, 2] );
      // console.log("prueba2", [1, 2] == [1, 2] );
    // console.log(param1);
    // console.log(props.cola);
    switch (props.cola) {
        case "cola0":
            // console.log("ENTRE a cola0" );         
            const seguimiento = [param1,...this.state.seguimiento];  
            this.setState({seguimiento});
            console.log("cola0", seguimiento[0], seguimiento[1], seguimiento[2], seguimiento[3] , seguimiento.length );
            if (seguimiento.length == 4)  {  
                // console.log("ENTRE 4 digitoscola0" );
               if (seguimiento[0] == "1" && seguimiento[1] == "2" && seguimiento[2] == "3" && seguimiento[3] == "4") { 
                  // console.log("ENTRE 1234 cola0" );    
                  const [primer, ...cola0] = this.state.cola0;
                  const cola1 = [primer,...this.state.cola1];
                  const seguimiento = [];                
                  this.setState({seguimiento});
                  this.setState({cola0});                    
                  this.setState({cola1});        
                } else {
                  // console.log("ENTRE Limpiar" );  
                  const seguimiento = [];  
                  this.setState({seguimiento});
                }

            }

            break;
        case "cola1":
            // console.log("ENTRE a cola1" );  
            const seguimiento1 = [param1,...this.state.seguimiento1];  
            this.setState({seguimiento1}); 
            console.log("cola1", seguimiento1[0], seguimiento1[1], seguimiento1[2], seguimiento1[3] , seguimiento1.length );
            if (seguimiento1.length == 4)  {
               // console.log("ENTRE 4 digitos cola1" );
               if (seguimiento1[0] == "1" && seguimiento1[1] == "2" && seguimiento1[2] == "3" && seguimiento1[3] == "4") {
                // console.log("ENTRE 1234 cola1" );             
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
            // console.log("ENTRE a cola2" );         
            const seguimiento2 = [param1,...this.state.seguimiento2];  
            this.setState({seguimiento2});            
            console.log("cola2", seguimiento2[0], seguimiento2[1], seguimiento2[2], seguimiento2[3] , seguimiento2.length );
            if (seguimiento2.length == 4)  {
               // console.log("ENTRE 4 digitos cola2" );              
               if (seguimiento2[0] == "1" && seguimiento2[1] == "2" && seguimiento2[2] == "3" && seguimiento2[3] == "4") { 
                // console.log("ENTRE 1234 cola2" );                            
                const [primer, ...cola2] = this.state.cola2;
                const cola3 = [primer,...this.state.cola3];
                const seguimiento2 = [];                
                this.setState({seguimiento2});
                this.setState({cola2});                    
                this.setState({cola3});
                } else {
                  // console.log("ENTRE Limpiar" );                    
                  const seguimiento2 = [];  
                  this.setState({seguimiento2});
                }                     
            } 

            break;
        case "cola3":
            // console.log("ENTRE a cola3" ); 
            const seguimiento3 = [param1,...this.state.seguimiento3];  
            this.setState({seguimiento3}); 
            console.log("cola3", seguimiento3[0], seguimiento3[1], seguimiento3[2], seguimiento3[3] , seguimiento3.length );            
            if (seguimiento3.length == 4)  {
               // console.log("ENTRE 4 digitos cola3" );              
               if (seguimiento3[0] == "1" && seguimiento3[1] == "2" && seguimiento3[2] == "3" && seguimiento3[3] == "4") {
                // console.log("ENTRE 1234 cola3" );                                
                const [primer, ...cola3] = this.state.cola3;
                const cola4 = [primer,...this.state.cola4];
                const seguimiento3 = [];                
                this.setState({seguimiento3});
                this.setState({cola3});                    
                this.setState({cola4}); 
                // console.log("COLAS", this.state.cola0 , this.state.cola1 , this.state.cola2 ,this.state.cola3);                 
                  if (this.state.cola0[0] == undefined && this.state.cola1[0] == undefined && this.state.cola2[0] == undefined && this.state.cola3[1] == undefined) {
                    console.log("G A M E    O V E R")
                    const time2 = Date.now(); 
                    const time3 = ((time2 - this.state.time1)/1000);
                    console.log("Elapsed Time  en  segundos: ", time3); 
                    // this.setState({time4: time3}); 
                    alert(`GAME OVER ${time3}`);
                  }

                } else {
                  // console.log("ENTRE Limpiar" );                  
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
            <Card elemento={this.state.cola0} cola={"cola0"} click={this.click} />  
        </div>

        <div className='col-md-10 row'>
            <Card elemento={this.state.cola1} cola={"cola1"} click={this.click}  />  
        </div>
        <div className='col-md-10 row'>
            <Card elemento={this.state.cola2} cola={"cola2"} click={this.click}  />  
        </div>
        <div className='col-md-10 row'>
            <Card elemento={this.state.cola3} cola={"cola3"} click={this.click}  />  
        </div>
        </div>
        );
  }



}

export default App;
