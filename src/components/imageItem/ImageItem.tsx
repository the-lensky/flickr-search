import React, {KeyboardEvent, useContext, useState} from 'react'
import './ImageItem.css'
import {ImageContext, ImageType} from '../../contex/state'


const Image = (props: any) => {

    const [tag, setTag] = useState('')

    const {title, farm, server, secret, id} = props

    const {addToBookmarks, bookmarks, addTag} = useContext(ImageContext)

    const imgPath = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

    const savedImage = bookmarks.find((image: ImageType) => image.id === id)

    const btnDisabler = savedImage ? true : false

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }

    const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTag(id, tag)
            setTag('')
        }
    }

    return (
        <div className="card grey darken-4">
            <div className="card-image ">
                <img src={imgPath} alt={title}/>
            </div>
            <div className="card-content grey darken-4">
                <span className="card-title">{title}</span>
            </div>
            <div className="card-action">
                <button
                    className="btn grey darken-1 "
                    onClick={() => addToBookmarks(props)}
                    disabled={btnDisabler}
                    type="submit"
                >
                    В избранное
                </button>
            </div>
            <div className="card-action">
                <input
                    placeholder='some tags?'
                    value={tag}
                    type='text'
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
            </div>
        </div>
    )
}

export default Image


// <div className='col s12 m6 l4 '>
//     <img className='card-image' src={imgPath} alt={title}/>
//     <p>{title}</p>
//     <button
//         className="btn grey darken-4"
//         onClick={() => addToBookmarks(props)}
//         disabled={btnDisabler}
//     >
//         В избранное
//     </button>
// </div>