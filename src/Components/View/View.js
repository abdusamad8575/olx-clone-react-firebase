import React from 'react';
import { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/Context';
function View() {

  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  const [userDetails,setUserDetails] = useState()
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
