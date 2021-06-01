import {createContext, useEffect, useReducer} from 'react'
import {reducer} from './reducer'
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


export type TInitialState = typeof initialState

export type InferActionsTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type ActionsTypes = ReturnType<InferActionsTypes<typeof actions>>;

export const actions = {
    setResponseDataAC: (data: any, isResetCurrentPage: boolean) => ({type: SET_RESPONSE_DATA, payload: {data,isResetCurrentPage}} as const),
    setImagesAC: (data: any) => ({type: SET_IMAGES, payload: data} as const),
    addToBookmarksAC: (image: ImageType) => ({type: ADD_TO_BOOKMARKS, payload: image} as const),
    removeFromBookmarksAC: (id: string) => ({type: REMOVE_FROM_BOOKMARKS, payload: id} as const),
    setNextPageAC: () => ({type: FETCH_NEXT_PAGE} as const),
    setPrevPageAC: () => ({type: FETCH_PREV_PAGE} as const),
    addTagAC: (id: string, tag: string) => ({type: ADD_TAG, payload: {id, tag}} as const),
    setSearchQueryAC: (query: string) => ({type: SET_SEARCH_QUERY, payload: query} as const),
}

export type responseDataType = {
    page: number
    pages: number
    perpage: number
    total: number
    photo: Array<ImageType>
}

export type ImageType = {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    tag?: string
}

const initialState = {
    searchQuery: '',
    responseData: {} as responseDataType,
    currentPage: 1,
    images: [],
    bookmarks: localStorage.getItem('bookmarks')
        ? JSON.parse(localStorage.getItem('bookmarks') as string)
        : [] as Array<ImageType>,
    setResponseData(data: any,isResetCurrentPage:boolean) {
    },
    setImages(data: any) {
    },
    addToBookmarks(data: any) {
    },
    removeFromBookmarks(id: string) {
    },
    setNextPage() {
    },
    setPrevPage() {
    },
    addTag(id: string, tag: string) {
    },
    setSearchQuery(query: string) {
    }
}


export const ImageContext = createContext(initialState)

export const ImageProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    }, [state])


    state.setResponseData = (data: any, isResetCurrentPage: boolean) => {
        dispatch(actions.setResponseDataAC(data, isResetCurrentPage))
    }

    state.setImages = (data: Array<ImageType>) => {
        dispatch(actions.setImagesAC(data))
    }

    state.addToBookmarks = (image: any) => {
        dispatch(actions.addToBookmarksAC(image))
    }

    state.removeFromBookmarks = (id: string) => {
        dispatch(actions.removeFromBookmarksAC(id))
    }

    state.setNextPage = () => {
        dispatch(actions.setNextPageAC())
    }

    state.setPrevPage = () => {
        dispatch(actions.setPrevPageAC())
    }

    state.addTag = (id: string, tag: string) => {
        dispatch(actions.addTagAC(id, tag))
    }

    state.setSearchQuery = (query: string) => {
        dispatch(actions.setSearchQueryAC(query))
    }

    return (
        <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
    )
}