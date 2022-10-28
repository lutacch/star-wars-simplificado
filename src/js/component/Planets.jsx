import React from "react";


const Planets = ({planets})=>{

  

    return(
        <div>
            <h1>Planets</h1>
            <p>{planets.map((planet, i)=>{
                return (
                    <p>{planet.name}</p>

                )
            })}</p>
        </div>
    )
}

export default Planets;