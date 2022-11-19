import React,{useState} from 'react'
import styled from 'styled-components'
export default function Header() {
  const [isopen,setIsopen] = useState(false)
  const CloseOpen = ()=>{
    setIsopen(!isopen)
  }
  return (
    <Headerstyle>
      <div className="nav">
        <h3><img src="../images/logo.svg" alt="" /></h3>
        <div className="nav-icon" onClick={CloseOpen}>
          <img src={isopen?"../images/icon-close.svg":"../images/icon-hamburger.svg"} alt="" />
        </div>
        <ul className={isopen?'nav-menu active':'nav-menu'}>
          <li className='nav-item'>how we work</li>
          <li className='nav-item'>blog</li>
          <li className='nav-item'>account</li>
          <li className='nav-item'> <button>view plans</button></li>
        </ul>
       
      </div>
      <div className="head">
        <div className="content">
          <div className="content-text">
          <div className="line"></div>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. Web blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected</p>
            <button>view plans</button>
          </div>
          <div className="content-image">
        <img src="../images/image-intro-desktop.jpg" alt="" />

          </div>
        </div>
        <img className='intro-right' src="../images/bg-pattern-intro-right-desktop.svg" alt="" />
      </div>
    </Headerstyle>
  )
}
// styled-components

const Headerstyle = styled.div`
font-family: 'Karla', sans-serif;

.nav{
  width: 90%;
  margin: auto;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  .nav-icon{
    display: none;
  }
.nav-menu{
  list-style: none;
  display: flex;
  align-items: center;
}
.nav-item{
  margin-left: 3rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  button{
    width: 10rem;
    height: 2.3rem;
    border: 2px solid #000;
    background-color: transparent;
    cursor: pointer;
  text-transform: uppercase;
letter-spacing: 2px;
    &:hover{
      color: #fff;
      background-color: #000;
      transition: all 0.5s ease;
    }
  }
}
/* nav media qurery */
@media(max-width:800px){
  .nav-icon{
    display: block;
    cursor: pointer;
    z-index: 10;
  }
.nav-menu{
  position: absolute;
  left:0%;
  top: -120%;
  height: 100vh;
  width: 100%;
  transition: all 1s ease;
  background-color: #201b2d;
  flex-direction: column;
  justify-content: flex-start;
padding-top: 2rem;
  .nav-item{
   margin: 2rem 0rem;
    color: #fff;
    
    button{
      color: #fff;
      border: 2px solid #fff;
      &:hover{
        background-color: #fff;
        color:#000;
      }
    }
  }
}
.active{
  top: 10.5%;
  /* transition: all 1s ease; */
}

}
}
.head{
height: 90vh;
background-color: #2D2640;
padding-top: 5rem;
position: relative;

.intro-right{
  position: absolute;
  top: 0;
  right: 0;
  
}
.content{
  width: 90%;
  margin: auto;
  padding: 1.5rem;
  color: #fff;
  display: flex;
  gap: 3rem;
  .content-image{
    flex: 1;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .content-text{
    flex: 1;
    .line{
      margin-bottom:2rem;
      background-color: #fff;
      height: 0.8px;
      width: 10rem;
    }
    h1{
      font-size: 4.4rem;
      line-height: 55px;
font-family: 'DM Serif Display', serif;

    }
    p{
      margin: 2rem 0rem;
      line-height: 30px;
    }
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
  }
  
}
}
/* media query */
@media(max-width:1100px){
  .head{
    height: 100vh;
  }
}
@media(max-width:910px){
  .head{
    min-height: 270vh;
    width: 100%;
    margin: 0;
    .content{
      width: 100%;
      padding: 0;
      flex-direction: column;
      
      .content-image{
        flex: 4;
        order: 1;
        width: 100%;
        height: 100vh;
      margin-top: -5rem;
    }
    .content-text{
     order: 3;
     text-align: center;
     padding: 0rem 2rem;
     h1{
      font-size: 2.5rem;
     }
     .line{
      display: none;
     }
    }

    }}
}
@media(max-width:600px){
.head{
  min-height: 220vh;
  .content{
    .content-text{
      h1{
        font-size: 2rem;
      }
    }
  }
}

}
@media(max-width:500px){
.head{
  /* min-height: 120vh; */
}

}
`