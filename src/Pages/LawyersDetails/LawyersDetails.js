import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import LawyerDetailsCommentList from '../../Components/LawyerDetailsCommentList'
import LawyersDetailsBooking from '../../Components/LawyersDetailsBooking'
import LawyerDetailsComment from '../../Components/LawyerDetailsComment'
import LawyersDetailsInfo from '../../Components/LawyersDetailsInfo'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Navbar from '../Navbar/Navbar'

import { getOneProfile } from '../../JS/actions/profile'
import { getPost } from '../../JS/actions/post'

import './lawyersdetails.css'

const LawyersDetails = () => {
  const {avocatID} = useParams()
  const [comment, setComment] = useState("");

  const User = useSelector((state) => state.auth.User);

  const Posts = useSelector((state) => state.post.Posts);

  const Profile = useSelector((state) => state.profile.Profile);
  const Loading = useSelector((state) => state.profile.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile(avocatID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (avocatID) {dispatch(getPost(avocatID))}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment]);
  
  return (
    <div className='lawyerDetails--page section__padding'>
        {Loading ? <LoadingSpinner /> : <>
        <Navbar />
        <LawyersDetailsInfo Profile={Profile} />
        <LawyersDetailsBooking avocatID={avocatID} Profile={Profile}/>
        <LawyerDetailsComment comment={comment} setComment={setComment} avocatID={avocatID} User={User} />
        <LawyerDetailsCommentList Posts={Posts} />
        </>}
    </div>
  )
}

export default LawyersDetails