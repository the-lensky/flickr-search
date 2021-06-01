import {
    ADD_TO_BOOKMARKS,
    SET_IMAGES,
    SET_RESPONSE_DATA,
    REMOVE_FROM_BOOKMARKS,
    FETCH_NEXT_PAGE,
    FETCH_PREV_PAGE,
    ADD_TAG,
    SET_SEARCH_QUERY
} from './actions'

import {ActionsTypes, ImageType, TInitialState} from './state'


export function reducer(state: TInitialState, action: ActionsTypes) {
    switch (action.type) {

        case SET_IMAGES: {
            return {
                ...state,
                images: action.payload || []
            }
        }

        case SET_RESPONSE_DATA: {
            return {
                ...state,
                responseData: action.payload.data,
                currentPage: action.payload.isResetCurrentPage ? 1 : state.currentPage
            }
        }

        case FETCH_NEXT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }

        case FETCH_PREV_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        }

        case ADD_TO_BOOKMARKS: {
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload] || []
            }
        }

        case REMOVE_FROM_BOOKMARKS: {
            return {
                ...state,
                bookmarks: state.bookmarks.filter((image: ImageType) => image.id !== action.payload)
            }
        }

        case ADD_TAG: {
            const newArr = state.images.map((image: ImageType) => {
                if (image.id === action.payload.id) {
                    return {...image, tag: action.payload.tag}
                } else return image
            })
            return {
                ...state,
                images: newArr
            }
        }

        case SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.payload
            }
        }


        default:
            return state
    }
}