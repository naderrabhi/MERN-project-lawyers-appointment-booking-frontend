import React from 'react'

const LawyerDetailsCommentCard = ({post}) => {
  return (
    <div className="lawyerDetailsCommentList--comment">
            <div className="lawyerDetailsCommentList--nameDate">
                <h2>{post.name}</h2>
                <h4>( {post.date.slice(0, 10) + " à " + post.date.slice(11, 16)} )</h4>
            </div>
            <p>{post.comment}</p>
            <div className="lawyerDetailsCommentList--btn">
                <button className='btn--costum'>Editer</button>
                <button className='btn--costum'>supprimer</button>
            </div>
        </div>
  )
}

export default LawyerDetailsCommentCard