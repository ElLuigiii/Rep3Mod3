import React from "react";

class Contador extends React.Component{
    state = {
        numero:0
    }
    
    incrementar = () => {
        
        this.setState({
            numero: this.state.numero+3,
            
        })
        
        if (this.state.numero>27) {
            this.setState({
                numero: this.state.numero=0
            })
        }
    }

    disminuir = ()=> {

        this.setState({
            numero: this.state.numero-.5
            
        })
        if (this.state.numero<0.5) {
            
            this.setState({
                numero: this.state.numero = 0
            })
            
        }
    }


    reinicio = ()=> {
        this.setState({
            numero: this.state.numero=0
        })
    }
        
    render(){
        return(
            <div className='div-calcu'>
                <h1> {this.state.numero}   </h1>
                <div className='botones'>
                        <button onClick={this.incrementar}> +</button>
                    <button onClick={this.disminuir}> -</button>
                    <br></br>
                    <button onClick={this.reinicio}>Reinicio</button>
                </div>
            </div>
        )
    }
}
export default Contador;

