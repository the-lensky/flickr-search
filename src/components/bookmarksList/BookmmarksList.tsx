import {useContext} from 'react'

import '../imageList/ImageList.css'

import {ImageContext, ImageType} from '../../contex/state'

import BookmarkItem from '../bookmarksItem/BookmarksItem'


const BookmarkList = () => {

    const {bookmarks} = useContext(ImageContext)

    return (
        <div className='container content grey darken-3 '>
            {!bookmarks.length
                ? <h4>You have no bookmarks yet :)</h4>
                : null
            }
            <div className='images'>
                {
                    bookmarks.map((bookmark:ImageType) => (<BookmarkItem key={bookmark.id} {...bookmark} />))
                }
            </div>

        </div>
    )
}

export default BookmarkList