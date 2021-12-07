import React from 'react';


const Character = ({personajes})=>{
    return(
        <div className="grid-carta" >
            {
            personajes.map((item, index)=>(
                <div key={index} className="carta">
                    <img src={item.image} width='250px' />
                    <>
                        <div className="descripcion-carta">
                            <h3>{item.name}</h3>
                            <hr/>
                            <ul>
                                <li> <b>Genero:</b> {item.gender}</li>
                                <li> <b>Especie:</b> {item.species}</li>
                                <li> <b>Ubicación:</b> {item.location.name}</li>
                            </ul>
                        </div>
                    </>
                </div>
            ))
            }
        </div>
        
    )
}
export default Character;