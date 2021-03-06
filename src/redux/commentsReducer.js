import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE  } from "./types"

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log('comments reducer >>>', action)
    
    switch(action.type) {

        case COMMENT_CREATE: 
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_UPDATE:
            const { data } = action 
            const { comments } = state
            const itemIndex = comments.findIndex(res => res.id === data.id)

            const nextCommments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex +1)
            ]

            return {
                ...state,
                comments: nextCommments
            }

        case COMMENT_DELETE:
            return(() => {
                const { id } = action
                const { comments } = state
                const itemIndex = comments.findIndex(res => res.id === id)

                const nextCommments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex +1)
                ]

                return {
                    ...state,
                    comments: nextCommments
                }
            
            })()
             // case COMMENTS_LOAD:

         default: 
            return state
    }
}
