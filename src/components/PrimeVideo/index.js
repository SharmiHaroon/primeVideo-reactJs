// Write your code here
// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const movieId = {
    action: 'ACTION',
    comedy: 'COMEDY',
  }

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieId.action,
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieId.comedy,
  )
  console.log(actionMovies)
  console.log(comedyMovies)

  return (
    <div className="app-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-image"
      />
      <h1 className="movies-heading">Action Movies</h1>
      <MoviesSlider moviesList={actionMovies} />
      <h1 className="movies-heading">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMovies} />
    </div>
  )
}

export default PrimeVideo
