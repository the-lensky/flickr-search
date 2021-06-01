import React, {KeyboardEvent} from 'react'

import './Search.css'

type SearchPropsType = {
    getImages: (query: string, isResetCurrentPage:boolean) => void,
    searchQuery: string,
    setSearchQuery: (query: string) => void
}

const Search: React.FC<SearchPropsType> = ({getImages, searchQuery, setSearchQuery}) => {

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    })

    const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getImages(searchQuery, true)
        }
    }

    return (
        <div className='row '>
            <div className='input-field col s12'>
                <input
                    type='text'
                    id='search-field'
                    placeholder='Find images'
                    value={searchQuery}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKey}
                />
                <i
                    className="material-icons prefix large icon search-icon"
                    onClick={() => getImages(searchQuery,true)}
                >search</i>
            </div>
        </div>
    )
}

export default Search