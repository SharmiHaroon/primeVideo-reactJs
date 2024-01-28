// Write your code here
// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

class MovieItem extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    const {eachMovie} = this.props

    const {thumbnailUrl, videoUrl} = eachMovie
    return (
      <div className="popup-container">
        <Popup
          trigger={
            <div className="card">
              <img
                alt="thumbnail"
                src={thumbnailUrl}
                className="thumbnail-image"
              />
            </div>
          }
          position="center"
        >
          {close => (
            <div className="popup-card">
              <div className="close-button">
                <button
                  type="button"
                  className="button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="video-container">
                <ReactPlayer
                  url={videoUrl}
                  className="video"
                  playing={isPlaying}
                />

                <button
                  type="button"
                  className="button"
                  onClick={this.onClickPlay}
                >
                  {btnText}
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default MovieItem
