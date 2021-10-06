import request from "superagent";

const URL = 'https://lit-spire-14205.herokuapp.com';

export async function getGamesOwned() {
    const response = await request.get(`${URL}/games_owned`)

    return response.body;
}

export async function getGameOwned(id) {
    const response = await request.get(`${URL}/games_owned/${id}`)

    return response.body;
}

export async function getGenre() {
    const response = await request.get(`${URL}/categories`)

    return response.body;
}

//posting is another team for creating a new item. 
export async function createGame(newGames) {
    const response = await request.post(`${URL}/games_owned`)
    .send(newGames)

    return response.body;
}

//put is another term for updating an existing item.

export async function updateGames(id, updatedGame) {
    const response = await request.put(`${URL}/games_owned/${id}`)
    .send(updatedGame)

    return response.body;
}

export async function deleteGame(id) {
    const response = await request.delete(`${URL}/games_owned/${id}`)
    
    return response.body;
}