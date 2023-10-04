import React, { Component } from 'react'
import Stagiaire from './Stagiaire'

export default class Etablissement extends Component {
    state = {
        list_stgs: this.props.stagiaires
    }
    render() {
        return (
            <div className='etablisement'>
                <h1>Nombre de stagiaires : {this.state.list_stgs.length}</h1>
                {
                    this.state.list_stgs.map(s =>
                        <Stagiaire key={s.id} nom={s.nom} age={s.age} url={s.image} filiere={s.filiere} />
                    )
                }
                <div>
                    <button onClick={() => this.setState({ list_stgs: [] })}>Clear ALL</button>
                    <button onClick={() => this.setState({ list_stgs: this.props.stagiaires })}>ALL</button>
                    <button onClick={() => this.setState({ list_stgs: this.props.stagiaires.filter(s => s.filiere === 'TDI') })}>TDI</button>
                    <button onClick={() => this.setState({ list_stgs: this.props.stagiaires.filter(s => s.filiere === 'TRI') })}>TRI</button>
                </div>
            </div>
        )
    }
}
