import { render, screen } from '@testing-library/react';
import App from './App';
import { createGame, getGameOwned, getGamesOwned, getGenre } from './Components/backendurl'
import request from "superagent";

test('renders learn react link', async () => {
  const expectation = [
    {
        "id": 1,
        "name": "Marvel's Avengers",
        "owner_id": 1,
        "genre_id": 1
    },
    {
        "id": 2,
        "name": "Red Dead Redemption 2",
        "owner_id": 1,
        "genre_id": 2
    },
    {
        "id": 3,
        "name": "League of Legends",
        "owner_id": 1,
        "genre_id": 1
    },
    {
        "id": 4,
        "name": "Spider-Man: Miles Morales",
        "owner_id": 1,
        "genre_id": 2
    },
    {
        "id": 5,
        "name": "Ghost of Tsushima",
        "owner_id": 1,
        "genre_id": 2
    },
    {
        "id": 6,
        "name": "Spider-Man",
        "owner_id": 1,
        "genre_id": 2
    }
];
const data = await getGamesOwned();
expect(data).toEqual(expectation)
});

test('Picks one game', async () => {
  const expectation = 
    {
        "id": 1,
        "name": "Marvel's Avengers",
        "owner_id": 1,
        "genre_id": 1
    }
  
const data = await getGameOwned(1);
expect(data).toEqual(expectation)
});

test('Create new game', async () => {
  const expectation = 
   
  
const data = await createGame(newGame);
expect(data).toEqual(expectation)
});
