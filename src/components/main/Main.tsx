import {useContext, useEffect, useState} from 'react'
import {ImageContext} from '../../contex/state'
import Search from '../search/Search'
import ImageList from '../imageList/ImageList'
import Pagination from '../pagination/Pagination'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const {setImages, setResponseData, currentPage, responseData, images} = useContext(ImageContext)

    const [query, setQuery] = useState('')

    const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&page=${currentPage}&per_page=24&format=json&nojsoncallback=true&text=`

    const getImages = (query:string) => {
        try {
            if (query.toLowerCase().trim() !== '') {
                fetch(`${API_URL}${query}`)
                    .then(response => response.json())
                    .then(data => {
                        setResponseData(data.photos)
                        setImages(data.photos.photo)
                    })
            } else {
                console.log('ELSE')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getImages(query)
    }, [currentPage])


    return (
        <div className='container content grey darken-3'>
            <Search setQuery={setQuery} query={query} getImages={getImages}/>
            {Object.keys(responseData).length ? <Pagination/> : null}
            <ImageList/>
        </div>
    )
}

export default Main