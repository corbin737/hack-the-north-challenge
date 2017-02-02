import React from 'react';

const StarRating = ({ rating }) => {

  let fullStars = Math.floor(rating / 2)
  let halfStar = (rating % 2 === 1)
  let emptyStars = 5 - fullStars - halfStar

  let stars = [], i, j = 0;
  for (i = 0; i < fullStars; i++) {
    stars.push(<i className='fa fa-star' key={j++}></i>)
  }
  if (halfStar) {
    stars.push(<i className='fa fa-star-half-o' key={j++}></i>)
  }
  for (i = 0; i < emptyStars; i++) {
    stars.push(<i className='fa fa-star-o' key={j++}></i>)
  }

  return (
    <span>
      {stars}
    </span>
  )
}

export default StarRating;
