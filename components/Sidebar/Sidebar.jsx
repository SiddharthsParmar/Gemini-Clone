import React, { useContext, useState } from 'react'
import './Sidebar.css';
import { Context } from '../../context/Context';


const Sidebar = () => {
const menu = 'https://cdn-icons-png.freepik.com/256/2976/2976215.png?uid=R32144196&ga=GA1.2.1903043144.1709119216&'

const msg = 'https://cdn-icons-png.freepik.com/256/1246/1246332.png?uid=R32144196&ga=GA1.2.1903043144.1709119216&'
const question = 'https://cdn-icons-png.freepik.com/256/471/471664.png?uid=R32144196&ga=GA1.2.1903043144.1709119216&'
const setting = 'https://cdn-icons-png.freepik.com/256/2040/2040504.png?uid=R32144196&ga=GA1.2.1903043144.1709119216&'
const history = 'https://cdn-icons-png.freepik.com/256/3503/3503786.png?uid=R32144196&ga=GA1.2.1903043144.1709119216&'
const plus ='https://cdn-icons-png.freepik.com/256/1828/1828925.png?uid=R32144196&ga=GA1.1.1903043144.1709119216&'

const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)
const [extended, setExtended] = useState(false);
const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
  await onSent(prompt)
}


  return (
   
    <div className='sidebar'>

<div className='top'>

<img src={menu} className='menu' onClick={()=>setExtended(prev=>!prev)}></img>
<div onClick={()=>newChat()} className='new-chat'>
    <img src={plus}/>
    {extended?<p>new chat</p>:null}
</div>
{extended?<div className='recent'>
    <p className='recent-title'>Recent</p>
    {prevPrompt.map((item,index)=>{
        return (
            <div onClick={()=>loadPrompt(item)} className='recent-entry'>
        <img src={msg}></img>
       {extended?<p>{item.slice(0,18)}...</p>:null} 
    </div>

        )

    })}
    {/* <div className='recent-entry'>
        <img src={msg}></img>
       {extended?<p>recent entry paragraph</p>:null} 
    </div> */}
</div>:null}


</div>


<div className='bottom'>
    <div className='bottom-item recent-entry'>
        <img src={question}></img>
       {extended? <p>Help</p>:null}
    </div>
    <div className='bottom-item recent-entry'>
        <img src={history}></img>
        {extended? <p>Activuty</p>:null}
    </div>
    <div className='bottom-item recent-entry'>
        <img src={setting}></img>
        {extended? <p>Setting</p>:null}
    </div>
</div>

    </div>

  )
}

export default Sidebar