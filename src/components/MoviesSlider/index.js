
// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className="slider">
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
