import React, {useContext} from 'react'
import '../imageItem/ImageItem.css'
import {ImageContext} from '../../contex/state'


const Image = (props: any) => {

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

        // <div className='col s12 m6 l4 image-wrapper'>
        //     <img className='card-image' src={imgPath} alt={title}/>
        //     <button
        //         className="btn grey darken-4"
        //         onClick={() => removeFromBookmarks(id)}
        //     >
        //         Удалить из избранного
        //     </button>
        //     <p>{tag}</p>
        // </div>
    )
}

export default Image


