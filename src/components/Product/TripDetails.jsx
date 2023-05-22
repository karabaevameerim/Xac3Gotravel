import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../../contexts/TripContextProvider';
import "../styles/TripDetails.css"
import { useAuth } from '../../contexts/AuthContextProvider';


const TripDetails = () => {
  const navigate = useNavigate();
  const {getTripDetails, tripDetails, setComments , commentsState} = useTrip();

  const {id} = useParams();

  React.useEffect(()=>{
    getTripDetails(id)
  },[])
   
  const goBack = () => {
    navigate(-1);
  };
  const [inputCom, setInputCom] = useState("");
  const { 
    user : {email} 
  } = useAuth();

  return (
    <>
    <div class="contain">
    <h1>Детали:</h1>
    <img src={tripDetails.picture} width="70%"/>
    
    <h2>Location:</h2>
    <p>{tripDetails.location}</p>
    
    <h2>Description:</h2>
    <p>{tripDetails.description}</p>
    
    <h2>Data:</h2>
    <p>{tripDetails.data}</p>
    
    <h2>Price:</h2>
    <p>{tripDetails.price}</p>
    
    <h2>Заголовок 6</h2>
    <p>Описание 6...</p>
    <br />
    {email ? (<>
      <form action="" className='comment-form'>
    <textarea type="text" placeholder='comment' onChange={(e) => {
                setInputCom(e.target.value);
              }}/>
    <button onClick={(e) => {
              // e.preventDefault();
              const newObj = {
                ...commentsState,
                comment: inputCom,
                user: email,
              };
              // console.log("newObj", newObj);

              setComments(newObj)}} className='add-comment-btn'>Add comment</button>
              </form>
    </>):<><div>Зарегистрируйся чтобы оставлять комментарии!</div></>}
    
              
                
{tripDetails.comments
  ? (tripDetails.comments.map((a) => {
    console.log(a);
      return (
        <div className='comment-block'>
          <p className='comment-user'>{a.user[0]}</p>
          <p className='comment'>{a.comment}</p>
        </div>
      );
    }))
  : null}
              
           
    <br />
    <button onClick={goBack} className='goback-btn'>GO BACK</button>
  </div>
    </>
  )
}

export default TripDetails;