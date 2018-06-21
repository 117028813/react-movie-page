import React, {Component} from 'react'
import './RatingStars.css'

class RatingStars extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const fullCount = Math.round(this.props.rating / 2)
    const starList = []
    for (let i = 0; i < 5; i++) {
      if (i < fullCount) {
        starList.push(<span className="rating-star rating-star-full" key={i}></span>)
      } else {
        starList.push(<span className="rating-star rating-star-gray" key={i}></span>)
      }
    }

    return (
      <span className="rating-stars">
        {
          starList
        }
      </span>
    )
  }
}

export default RatingStars
