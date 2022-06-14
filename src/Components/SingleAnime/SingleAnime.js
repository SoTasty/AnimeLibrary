import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import uniqId from "uniqid"
import classes from './SingleAnime.module.css'
import React from "react"
import imageAnime from "../../img/1573040439_2019-11-05-13-19-4238 6.jpg"
// import { useQuery } from "@apollo/client/react"
// import { gql } from "@apollo/client/core"

// const GET_ANIME = gql`
// query ($id: Int, $page: Int, $perPage: Int, $search: String) {
//   Page (page: $page, perPage: $perPage) {
//     pageInfo {
//       total
//       currentPage
//       lastPage
//       hasNextPage
//       perPage
//     }
//     media (id: $id, search: $search) {
//       id
//       title {
//         romaji
//       }
//     }
//   }
// }
// `;
// // import { commentCreate } from "./redux/actions"

function SingleAnime(props) {
//     const [textComment, setTextComment] = useState('')
//     const comments = useSelector(state => {
//         const { commentsReducer } = state
//         return commentsReducer.comments
//     })
//    const dispatch = useDispatch();

//     const handleInput = (e) => {
//         setTextComment(e.target.value)
        
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const id = uniqId();
//         dispatch(commentCreate(textComment, id))
//     }

    // const {error, data, loading} = useQuery(GET_ANIME)

    // console.log({error, data, loading})

    // if(loading) return <div>spinner...</div>

    // if(error) return <div>error...</div>

    return (
        <div className={classes.wrap}>
            <div className={classes.img_wrap}>
                <img src={imageAnime}></img>
            </div>
            <div className="title">
                <p>{props.anime.title.romaji}</p>
            </div>
        </div>
    )
}

export default SingleAnime