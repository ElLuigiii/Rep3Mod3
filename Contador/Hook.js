import React, {useState} from "react";

export default function Hooks(){
        
        const [numero, setNumero] = useState(5);
        
        function incrementar() {
            setNumero(numero-.5)
        }
        
        if(numero<0){
            setNumero(0)
        }
        else if (numero>30) {
            setNumero(0)
        }

        function aumentar() {
            setNumero(numero+3)
            
        }

        function renumber() {
            setNumero(0)
        }
           
        return (
        <div className='div-calcu'>
            <h1>{numero}</h1>
            <div className='botones'>
                <button onClick={incrementar} >-</button>
                <button onClick={aumentar} >+</button>
                <br></br>
                <button onClick={renumber}>Reinicar</button>
            </div>
        </div>
    );
}