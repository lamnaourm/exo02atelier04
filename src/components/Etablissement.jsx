import React, { Component } from 'react'
import Stagiaire from './Stagiaire'

export default class Etablissement extends Component {
    state = {
        list_stgs: this.props.stagiaires
    }
    render() {
        return (
            <div>
                <h1>Nombre de stagiaires : {this.state.list_stgs.length}</h1>
                {
                    this.state.list_stgs.map(s=> 
                        <Stagiaire key={s.id} nom={s.nom} age={s.age} url={s.image} filiere={s.filiere} />
                        )
                }

                <button onClick={() => this.setState({list_stgs: []})}>Clear ALL</button>
                <button onClick={() => this.setState({list_stgs: this.props.stagiaires})}>ALL</button>
            </div>
        )
    }
}
