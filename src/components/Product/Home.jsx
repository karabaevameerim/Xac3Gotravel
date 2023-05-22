import React from 'react' 
import newMexico from "../../assets/video/NewMexico_3.mp4" 
 
import "../styles/Home.css" 
const Home = () => { 
  return ( 
    <> 
    <div> 
      {/* 1block */} 
    <div className="main-container"> 
      <div className="video-cont"> 
      <video style={{width:"100%"}}  controls  
        autoPlay  
        loop  muted playsInline 
        poster='https://lonelyplanetstatic.imgix.net/marketing/2023/BIT/images/hero-poster/NewMexico_3.jpg' 
      > 
        <source src={newMexico} type="video/mp4" /> 
      </video> 
      </div> 
      <div className='item'> 
        <div className="item-title"> 
        <h1 className='h1'>OPEN YOUR EYES</h1> 
        <h4>"Kyrgyzstan is a Paradise For the Eyes"</h4> 
        <p>Discover something new...</p> 
         
 
 
        </div> 
      </div> 
       
      </div> 
{/* 2block */} 
 
      <div className='otzyv-video-case'> 
        <div> 
        <img className='otzyv-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NJFXl3bZBoF6od4X1VdsYtsz7MpzU-GRDQ&usqp=CAU'/> 
        </div> 
        <h1>Go Travel!</h1> 
      <p>Станьте активной частью этого сообщества! Мы приветствуем любую деятельность, связанную с передачей вашего туристического опыта. Пишите рассказы о ваших путешествиях, делитесь мнениями о городах, странах и достопримечательностях. Создавайте фотоальбомы и их увидят тысячи заинтересованных пользователей. Получайте ответы на любые вопросы, связанные с путешествиями, и отвечайте на них сами. 
 
Помните, что вы находитесь среди единомышленников, выбравших для себя увлекательнейший путь самостоятельного туризма. Наши пользователи всегда помогают друг другу, общаются не только в виртуальной среде, но и устраивают совместные встречи за ее пределами.</p> 
    </div> 
 
  
 
 
      {/* 3block */} 
      <div style={{display: "flex", padding: "0px 5px"}} className="total__image"> 
    <div   className="image-case"> 
<img style={{width: "100%", height:"100%"}} src="https://celes.club/uploads/posts/2022-05/1651710328_42-celes-club-p-priroda-kirgizii-krasivo-foto-45.jpg" alt="poster" /> 
<div className="text-case"> 
<p>Лучшие локации</p><h1 style={{fontSize: "56px"}}>2023</h1> 
</div> 
</div> 
<div className="image-case"> 
<img style={{width: "100%", height:"100%"}} src="https://www.advantour.com/img/kazakhstan/culture/kazakhstan-culture-yurt.jpg" alt="poster" /> 
<div className="text-case"> 
<p>Окунись в традиции <br/> вместе  с нами</p> 
<h3> 
  История и традиции Кыргызстана <br/> всегда с нами .... 
</h3> 
</div> 
</div> 
<div   className="image-case"> 
<img style={{width: "100%", height:"100%"}} src="https://img.geliophoto.com/bishkek/00_bishkek.jpg" alt="poster" /> 
<div className="text-case"> 
<p>Откройте другую <br/> сторону КР</p> 
<h3>Оказавшись в ночном Бишкеке вы попадаете в совсем другое пространство... 
</h3> 
</div> 
 
</div> 
    </div> 
    {/* 4block */} 
  
    <div  style={{margin: "70px 0px", padding: "50px 10px"}}> 
      <h1 style={{padding: "20px 10px", fontFamily: "Roboto, cursive", fontWeight: "lighter"}}>Самые посещаемые  места:</h1> 
      <div style={{display: "flex", flexWrap:"wrap", alignItems: "center", justifyContent: "center"}} className="image-container"> 
        <div className="item__image-container"><img style={{width:"230px", height:" 200px", padding: "3px 5px"}}  src='https://avatars.mds.yandex.net/i?id=5ac48645040753c183404c82827cc38d9ef896a3-9211905-images-thumbs&n=13' alt='pic1'/> 
        <h6 style={{margin: "0px 10px" , fontSize:"14px"}}>o.Сары-Челек</h6> 
        </div> 
        <div className="item__image-container"> 
      <img style={{width:"230px", height:" 200px", padding: "3px 5px"}}  src='https://avatars.mds.yandex.net/i?id=bced35ed87baee6e3cee8ee1fa4752c2de39649c-7552414-images-thumbs&n=13' alt='pic1'/> 
      <h6 style={{margin: "0px 10px", fontSize:"14px"}}>г.Бишкек</h6> 
      </div> 
      <div className="item__image-container"> 
      <img style={{width:"230px", height:" 200px", padding: "3px 5px"}}src='https://avatars.mds.yandex.net/i?id=57ce0c0373f835bcb26a31c9f802ff2368d09b01-8497596-images-thumbs&n=13' alt='pic1'/> 
      <h6 style={{margin: "0px 10px", fontSize:"14px"}}>башня Бурана</h6> 
      </div> 
      <div className="item__image-container"> 
      <img style={{width:"230px", height:" 200px", padding: "3px 5px"}}  src='https://avatars.mds.yandex.net/i?id=b437abffaae055ed2c351f77e987f4a1229d7c7c-7552082-images-thumbs&n=13' alt='pic1'/> 
      <h6 style={{margin: "0px 10px", fontSize:"14px"}}>национальный парк Ала-Арча</h6> 
      </div> 
      <div className="item__image-container"> 
      <img style={{width:"230px", height:" 200px", padding: "3px 5px"}}  src='https://avatars.mds.yandex.net/i?id=be7824d26d367ab1bc6d18f79012c685d4011b7f-9182438-images-thumbs&n=13' alt='pic1'/> 
      <h6 style={{margin: "0px 10px", fontSize:"14px"}}>о. Ыссык-Куль</h6> 
      </div>  
      </div> 
    </div> 
    </div> 
    </> 
  ) 
} 
 
export default Home;