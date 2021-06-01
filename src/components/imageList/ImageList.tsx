import React, {useContext} from 'react'
import ImageItem from '../imageItem/ImageItem'
import './ImageList.css'
import {ImageContext, ImageType} from '../../contex/state'

const ImageList = () => {

    const {images} = useContext(ImageContext)

    if (!images.length) {
        return <h4>No images here. Would you try to search for anything esle?</h4>
    }

    return (
        <div className='images'>
            {
                images.map((image: ImageType) => (<ImageItem key={image.id} {...image} />))
            }
        </div>
    )
}

export default ImageList