import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Main from './components/main/Main'
import Bookmarks from './components/bookmarks/Bookmarks'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {
    return (
        <>
            <Router basename='/imagefinder'>
                <main className='wrapper grey darken-2'>
                    <Header/>
                    <Sidebar/>
                    <Main />
                    {/*<Switch>*/}
                    {/*    <Route exact path='/' component={Main} />*/}
                    {/*    <Route path='/bookmarks' component={Bookmarks} />*/}
                    {/*</Switch>*/}
                    <Footer/>
                </main>
            </Router>
        </>
    )
}

export default App
