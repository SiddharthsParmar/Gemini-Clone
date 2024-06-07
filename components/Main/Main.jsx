import React, { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Context";


const Main = () => {
  const user =
    "https://cdn-icons-png.freepik.com/256/4140/4140037.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&";
    const bulb = 
    "https://cdn-icons-png.freepik.com/256/13549/13549304.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&"
    const compass = "https://cdn-icons-png.freepik.com/256/1082/1082810.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&"
    const message = "https://cdn-icons-png.freepik.com/256/739/739286.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&"
    const send ="https://cdn-icons-png.freepik.com/256/12500/12500013.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&"
    const gemini = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&usqp=CAU"


const {onSent,recentPrompt,showResult,loading,resultData,setInputText,inputText} = useContext(Context);



  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={user} />
      </div>
      <div className="main-container">
      {!showResult?
      
      <>
      <div className="greet">
          <p>
            <span>Hello , Dev</span>
          </p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Help create a weekly meal plan for two</p>
            <img src={compass}></img>
          </div>
          <div className="card">
            <p>Ideas to surprise a friend on their birthday</p>
            <img src={message}></img>
          </div>
          <div className="card">
            <p>Provide questions to help me prepare for an interview</p>
            <img src={bulb}></img>
          </div>
          <div className="card">
            <p>Come up with a product name for a new app</p>
            <img src={bulb}></img>
          </div>
        </div>
      </>:<div className="result">
        <div className="result-title">
        <img src={user}></img>
        <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={gemini} alt=""></img>
          {loading
          ?<div className="loader">

          <hr></hr>
          <hr></hr>
          <hr></hr>

          </div>
          
          : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
         
        </div>

      </div> 
      }
       
       

<div className="main-bottom">
    <div className="search-box">
        <input onChange={(e)=>setInputText(e.target.value)} value={inputText} type="text" placeholder="Enter a prompt here"></input>
        <div>
        <img src={user} alt=""></img>
        <img src={compass} alt=""></img>
       {inputText?<img onClick={()=>onSent()} src={send} alt=""></img>:null} 
        </div>
    </div>
    <p className="bottom-info">
        Gemini may display iacuurate info , including about people ,so double check 
    </p>
</div>





      </div>
    </div>
  );
};

export default Main;
