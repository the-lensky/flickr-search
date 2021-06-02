import React, {useContext} from 'react'
import {ImageContext, ImageType} from '../../contex/state'
import '../imageItem/ImageItem.css'


const Image = (props:ImageType) => {

    const {title, farm, server, secret, id, tag} = props

    const {removeFromBookmarks} = useContext(ImageContext)

    let imgPath = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

    return (
        <div className="card grey darken-4">
            <div className="card-image ">
                <img src={imgPath} alt={title}/>
            </div>
            <div className="card-content grey darken-4">
                <span className="card-title">{title}</span>
            </div>
            <div className="card-action">
                <p>{tag}</p>
                <button
                    className="btn grey darken-1 "
                    onClick={() => removeFromBookmarks(id)}
                    type="submit"
                >
                    Удалить из избранного
                </button>
            </div>
            <div className="card-action">
            </div>
        </div>
    )
}

export default Image


