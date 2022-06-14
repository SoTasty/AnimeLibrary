import { COMMENT_CREATE  } from "./types"

const initialState = {
    animes: []
}

export const animeLibraryReducer = (state = initialState, action) => {
    console.log('animeLibraryReducer >>>', action)
    
    switch(action.type) {

        case COMMENT_CREATE: 
            return {
                ...state,
                comments: [...state.comments, action.data]
            }

         default: 
            return state
    }
}
