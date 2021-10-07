import React, { Component } from 'react'
import { createGame, getGenre } from './backendurl'

export default class Create extends Component {

    state = {
        genres: [],
        name: '',
        genre_id: 1


    }

    componentDidMount = async () => {
        const categories = await getGenre()

        this.setState({ genres: categories })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createGame(this.state)

        this.props.history.push('/list')
    }

    render() {
       
        return (
         <form className="create" onSubmit={this.handleSubmit}>
             <label>
                 Name
             <input onChange = {(e) => this.setState({ name: e.target.value })} />
             </label>
             <label>
                 Genre
                 <select onChange = {(e) => this.setState({ genre_id: e.target.value })}>
                     {this.state.genres.map(genre =>
                        <option key={`${genre.genre}-${genre.id}`} value={genre.id}>
                            {genre.genre}
                        </option>)}
                        </select>
             </label>
             <button>Submit</button>
             
         </form>
        )
    }
}
