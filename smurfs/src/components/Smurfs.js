import React from 'react'

export const Smurfs = ({smurfs}) => {
    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <div>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}