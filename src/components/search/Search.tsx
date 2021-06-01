import React, {KeyboardEvent} from 'react'

import './Search.css'

// type ISearchType {
//     getImages: any
//     query: string
//     setQuery:any
// }

const Search: React.FC<any> = ({getImages, query, setQuery})  => {

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setQuery(e.target.value)
    })

    const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getImages(query)
        }
    }

    return (
        <div className='row '>
            <div className='input-field col s12'>
                <input
                    type='text'
                    id='search-field'
                    placeholder='Find images'
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
                <i
                    className="material-icons prefix large icon search-icon"
                    onClick={() => getImages(query)}
                >search</i>
            </div>
        </div>
    )
}

export default Search