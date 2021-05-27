import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Bookmarks from './components/Bookmarks'


function App() {
    return (
        <>
            <Router basename='/imagefinder'>
                <Header/>
                <Switch>
                   <Route exact path='/' component={Main} />
                   <Route exact path='/bookmarks' component={Bookmarks} />
                </Switch>
            </Router>
        </>
    )
}

export default App
