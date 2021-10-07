
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import List from './Components/list';
import Update from './Components/update';
import Create from './Components/create';


export default class App extends Component {
  render() {
    return (
      
    <Router>
      <header>
        <NavLink to="/" className="Link"> Home</NavLink>
        <NavLink to="/update" className="update"> Update Your Gaming library</NavLink>
        <NavLink to='/create' className="create"> Add a New Game to your library</NavLink>
        <NavLink to='/list' className="list">View Your Gaming library</NavLink>
        </header>
      <Switch>
        <Route
         path='/list'
         exact
         render={(routerProps) => <List {...routerProps} />}
         />
         <Route
         path='/update/:id'
         exact
         render={(routerProps) => <Update {...routerProps} />}
         />
         <Route
         path='/create'
         exact
         render={(routerProps) => <Create {...routerProps} />}
         />
         <div>
        
         </div>
      </Switch>
    </Router>
  
    )
  }
}


