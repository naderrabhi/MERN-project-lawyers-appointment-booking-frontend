import React from 'react'
import LawyerDetailsCommentCard from './LawyerDetailsCommentCard'

const LawyerDetailsCommentList = ({Posts}) => {
  return (
    <div className='lawyerDetailsCommentList'>
      {Posts && Posts.map(post => <LawyerDetailsCommentCard key={post._id} post={post} />)}
    </div>
  )
}

export default LawyerDetailsCommentList