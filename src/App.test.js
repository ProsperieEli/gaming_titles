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
        "genre": "Action"
    },
    {
        "id": 2,
        "name": "Red Dead Redemption 2",
        "owner_id": 1,
        "genre": "Open-World"
    },
    {
        "id": 3,
        "name": "League of Legends",
        "owner_id": 1,
        "genre": "Action"
    },
    {
        "id": 4,
        "name": "Spider-Man: Miles Morales",
        "owner_id": 1,
        "genre": "Open-World"
    },
    {
        "id": 5,
        "name": "Ghost of Tsushima",
        "owner_id": 1,
        "genre": "Open-World"
    },
    {
        "id": 6,
        "name": "Spider-Man",
        "owner_id": 1,
        "genre": "Open-World"
    },
    {
        "id": 15,
        "name": "Sonic",
        "owner_id": 1,
        "genre": "Action"
    },
    {
        "id": 16,
        "name": "Sonic",
        "owner_id": 1,
        "genre": "Action"
    },
    {
        "id": 17,
        "name": "Sonic",
        "owner_id": 1,
        "genre": "Action"
    },
    {
        "id": 18,
        "name": "Sonic",
        "owner_id": 1,
        "genre": "Action"
    }
];
const data = await getGamesOwned();
expect(data).toEqual(expectation)
});

test('Picks one game', async () => {
  const expectation = 
  {
    "id": 2,
    "name": "Red Dead Redemption 2",
    "owner_id": 1,
    "genre": "Open-World"
}
  
const data = await getGameOwned(2);
expect(data).toEqual(expectation)
});

test('Picks one genre', async () => {
    const expectation = 
    [
        {
            "id": 1,
            "genre": "Action"
        },
        {
            "id": 2,
            "genre": "Open-World"
        }
    ]
    
  const data = await getGenre();
  expect(data).toEqual(expectation)
  });
