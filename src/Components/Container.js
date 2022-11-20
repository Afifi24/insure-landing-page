import React from 'react'
import styled from 'styled-components'
export default function Container() {
  return (
    <Containerstyle>
     <div className="content">
     <div className="line"></div>
      <h1>We're different </h1>
      <div className="content-container">
           <div className="content-item">
            <img src="../images/icon-snappy-process.svg" alt="" />
            <h2>Snappy Process</h2>
            <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
           </div>
           <div className="content-item">
           <img src="../images/icon-affordable-prices.svg" alt="" />
            <h2>Affordable Prices</h2>
            <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
           </div>
           <div className="content-item">
            <img src="../images/icon-people-first.svg" alt="" />
            <h2>People First</h2>
            <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
           </div>

      </div>
      <div className="find">
        <h1>Find out more <br /> about how we work </h1>
        <button>How we work</button>
      </div>
     </div>
    </Containerstyle>
  )
}
// styled-components

const Containerstyle = styled.div`
min-height: 150vh;
display: flex;
.content{
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .find{
    display: flex;
    background-color: #2D2640;
    color:#fff;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    padding: 2rem 4rem;
    button{
    width: 10rem;
    height: 2.3rem;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover{
      color: #000;
      background-color: #fff;
      transition: all 0.5s ease;
    }
  }
    h1{
      font-size: 3rem;
      margin: 0;
    }
    align-items: center;
  }
  .line{
      margin-bottom:2rem;
      background-color: #000;
      height: 0.8px;
      width: 10rem;
    }
  h1{
    margin-bottom:5rem;
    font-size: 4.3rem;
  }
}
.content-container{
  gap: 3rem;
  display: flex;
  .content-item{
    flex:1 ;
    h2{
      margin: 2rem 0rem;
    }
  }
}
@media(max-width:786px){
  text-align: center;
  .content-container{
    flex-direction: column;
    text-align: center;
    padding: 0rem 2rem;
  }
}
@media(max-width:868px){

  .find{
    flex-direction: column;
    h1{
      font-size: 1rem;
      margin-bottom: 2rem;
    }

  }
}
`