import React, { Component } from 'react'
import { createGame, getGenre } from './backendurl'

export default class Create extends Component {

    state = {
        genre: [],
        name: '',


    }

    componentDidMount = async () => {
        const categories = await getGenre()

        this.setState({ genre: categories })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createGame(this.state)

        this.props.history.push('/list')
    }

    render() {
        return (
         <form onChange={this.handleSubmit}>
             <label>
                 Name
             <input onChange = {(e) => this.setState({ name: e.target.value })} />
             </label>
             <label>
                 Genre
                 <input onChange = {(e) => this.setState({ genre: e.target.value })} />
             </label>
             <button onClick="enter">Submit.</button>
             
         </form>
        )
    }
}
