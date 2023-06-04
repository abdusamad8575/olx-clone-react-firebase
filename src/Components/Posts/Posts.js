import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postContext';
import {useHistory} from 'react-router-dom'

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const [car,setCar] =useState([]);
  const {setPostDetails}=useContext(PostContext)
  const history =useHistory()
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost);
    })
  }, [])
  useEffect(()=>{
    firebase.firestore().collection('products').where('category','==','car').get().then((result)=>{
      const allPost = result.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setCar(allPost);
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {
            products.map((product) => {
              return (
          <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>
                
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>cars only</span>
        </div>
        <div className="cards">
          {
            car.map((product)=>{
              return(
                <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>

              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
