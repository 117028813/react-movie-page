import React, {Component} from 'react'
import RatingStars from './RatingStars.js'
import './Movie.css'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="item">
        <div className="img-box">
          <img src={require('../assets/imgs/' + this.props.movie.picUrl)} alt="" />
        </div>
        <div className="info">
          <span className="title">{this.props.movie.title}</span>
          <div className="rank">
            {
              this.props.movie.rating ? (
                <div>
                  <RatingStars rating={this.props.movie.rating} />
                  <span>{this.props.movie.rating}</span>
                </div>
              ) : (
                <span>暂无评分</span>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
