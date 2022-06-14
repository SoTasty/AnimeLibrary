import './App.css';
import Likes from './Likes';
import store from './redux/store';
import Title from './Title';
import Comments from './Comments'
import SingleAnime from './Components/SingleAnime/SingleAnime';
import { useQuery } from "@apollo/client/react"
import { gql } from "@apollo/client/core"

const GET_ANIME = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;


function App() {

  const {error, data, loading} = useQuery(GET_ANIME)
  

    console.log({error, data, loading})

    if(loading) return <div>spinner...</div>

    if(error) return <div>error...</div>

  return (
    <div className="App">
      <div className="wrap">
        <div className='search-form'>

        </div>
        <div className='library'>
          {data.Page.media.map(anime => {
            return <SingleAnime anime={anime}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
