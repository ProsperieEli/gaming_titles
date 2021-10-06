import React, { Component } from 'react'
import { getGameOwned, updateGames, getGenre } from './backendurl'

export default class Update extends Component {
    state = {
        genres: [],
        name: '',
        genre_id: 1


    }

    componentDidMount = async () => {
        const categories = await getGenre()
        const game = await getGameOwned(this.props.match.params.id)

        this.setState({ genres: categories, ...game })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await updateGames(this.props.match.params.id, this.state)

        this.props.history.push('/list')
    }

    render() {
     
        return (
         <form onSubmit={this.handleSubmit}>
             <label>
                 Name
             <input onChange = {(e) => this.setState({ name: e.target.value })} value={this.state.name}/>
             </label>
             <label>
                 Genre
                 <select value={this.props.genre_id} onChange = {(e) => this.setState({ genre_id: e.target.value })}>
                     {this.state.genres.map(genre =>
                        <option 
                        // selected={genre.id === this.state.genre_id}
                        key={`${genre.genre}-${genre.id}`} value={genre.id}>
                            {genre.genre}
                        </option>)}
                        </select>
             </label>
             <button>Submit.</button>
             
         </form>
        )
    }
}
