import {useContext, useEffect} from 'react'
import {ImageContext} from '../../contex/state'
import Search from '../search/Search'
import ImageList from '../imageList/ImageList'
import Pagination from '../pagination/Pagination'

const API_KEY = process.env.REACT_APP_API_KEY


const Main = () => {

    const {setImages, images, setResponseData, currentPage, searchQuery, setSearchQuery} = useContext(ImageContext)

    const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&page=${currentPage}&per_page=24&format=json&nojsoncallback=true&text=`

    const getImages = (query: string, isResetCurrentPage: boolean = false) => {
        try {
            if (query.toLowerCase().trim() !== '') {
                fetch(`${API_URL}${query}`)
                    .then(response => response.json())
                    .then(data => {
                        setResponseData(data.photos, isResetCurrentPage)
                        setImages(data.photos.photo)
                    })
            } else {
                setResponseData({}, isResetCurrentPage)
                setImages([])
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getImages(searchQuery)
    }, [currentPage])


    return (
        <div className='container content grey darken-3'>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} getImages={getImages}/>
            {images.length ? < Pagination/> : null}
            <ImageList/>
        </div>
    )
}

export default Main