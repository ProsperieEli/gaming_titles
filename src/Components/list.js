import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteGame, getGamesOwned } from './backendurl'


export default class List extends Component {
    state= {
        gamesOwned: [],
        
    }

    componentDidMount = async () => {
        const gamesOwned = await getGamesOwned();
        this.setState({ gamesOwned: gamesOwned })
    }
    handleClick = async (id) => {
        const getridOf = await deleteGame(id)

        this.setState({ gamesOwned: getridOf })
    }
    //Create a delete function to remove unneccessary items. Stretch.
    render() {
        const { gamesOwned } = this.state;

        return (
            <div className="games-list-container">
            <div className="games-list">
                {
                    gamesOwned.map(({
                        id,
                        name,
                        genre,
                        owner_id,
                    }) => 
                    <Link to={`update/${id}`} key={`${name}-${id}`}>
                        <div className="game-info-container">
                            <p className="name">{name}</p>
                            <p className="genre">{genre}</p>
                            <button className="button" onClick={() => this.handleClick(id)}>Sell.</button>


                            </div>
                    </Link>)
                }
            </div>
            </div>
        )
    }
}
