import React, {Component} from 'react';

export default class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '!'
        }
        this.changeMe = this.changeMe.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("Componente va a recibir PROPS!");
        this.setState({
           //set something 
        });
        //No ejecuta la primera vez!
        //Pre-calcular la llegada de props, normalmente se almacena data en el STATE!
    }

    componentWillMount() {
        console.log("Componente va a montar!");
        //Cambiar el state no detonara un re-render!
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Componente esta evaluando si deberia repintar!");
        //No ejecuta la primera vez!
        //Recibie prop y state para determinar si se debe repintar!
        //Retorna boolean!
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("El componente va a repintar!");
        //No ejecuta la primera vez!
        //Recibe props y state para pre-calcular cosas antes del render
    }

    changeMe() {
        this.setState({
            body:"CLICKED!!"
        });
        this.props.changeAlert("HOLA!!!");
    }

    render() {
        console.log("PINTANDO!!");
        //NO MANEJAR EL DOM AQUI!
        return(
            <div className="testing">
                <h1 onClick={this.changeMe}>Esto es un tweet!!</h1>
                <p>{this.state.body}</p>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("El componente recien renderizo y la data actualizo");
        //No ejecuta la primera vez!
        //Aqui se podria manejar el DOM
    }

    componentDidMount() {
        console.log("Componente ready!");
        //Aqui se podria manejar el DOM
    }

    componenteWillUnmount() {
        console.log("Componente fuera del DOM!");
        //Aqui se pueden limpiar elementos, timeouts, etc
    }
}