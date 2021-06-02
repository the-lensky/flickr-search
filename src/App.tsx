import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

import {ImageProvider} from './contex/state'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import BookmarkList from './components/bookmarksList/BookmmarksList'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <ImageProvider>
            <Router basename='/flickr-search'>
                <main className='wrapper grey darken-2'>
                    <Header/>
                    <Sidebar/>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                        <Route path='/bookmarks' component={BookmarkList}/>
                    </Switch>
                    <Footer/>
                </main>
            </Router>
        </ImageProvider>
    )
}

export default App
