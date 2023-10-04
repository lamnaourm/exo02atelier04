import React from 'react'

export default function Stagiaire({nom, age, filiere, url}) {
  return (
    <div className='stagiaire'>
        <img src={url} alt={nom} />
        <div>
            <h1>{nom} - {filiere}</h1>
            <h3>Age : {age}</h3>
        </div>
    </div>
  )
}
