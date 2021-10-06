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
            <div className="gamesOwned">
                {
                    gamesOwned.map(({
                        id,
                        name,
                        genre,
                        owner_id,
                    }) => 
                    <Link to={`update/${id}`} key={`${name}-${id}`}>
                        <div className="gaming-list">
                            <p>{name}</p>
                            <p>{genre}</p>
                            <button onClick={() => this.handleClick(id)}>Sell.</button>


                            </div>
                    </Link>)
                }
            </div>
        )
    }
}
