import React from "react";

const People = ({data}) => {
    return(
        <div>
            <h1>People</h1>
            <p>{data.map((people,i) => {
                return (
                    <p key={i}>{people.name}</p>
                    
                )
            })}</p>
            </div>
    )
}

export default People;