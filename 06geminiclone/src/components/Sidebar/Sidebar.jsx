import React,{useState} from 'react'
import './Sidebar.css'

const Sidebar = () => {

  const[extended,setExtended] = useState(false);
  
  return (
    <div className="sidebar">
      <div className="top">
        <img  onClick={()=>setExtended(prev=>!prev)} className="menu" src="../public/imggemini/menu.png" alt="" />
        <div className="new-chat">
            <img src="../public/imggemini/plus.png" alt="" />
            {extended ? <p>New chat</p>:null}
            </div>
            {extended ? <div className="recent">
                <p className="recent-title">Recent</p>
                  <div className="recent-entry">
                    <img src="../public/imggemini/message.png" alt="" />
                    <p>What is react...</p>
                </div>
              </div>
              :null}
          </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src="../public/imggemini/question.png" alt="" />
            { extended ? <p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="../public/imggemini/history.png" alt="" />
            { extended ?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="../public/imggemini/setting.png" alt="" />
            {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
