import React from 'react'
import './Front.css'

const Front = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="../public/imggemini/user.png" alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello , Anu </span></p>
          <p>How Can I Help You Today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip.</p>
            <img src="../public/imggemini/compass.png" alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept : urban planning.</p>
            <img src="../public/imggemini/bulb.png" alt="" />
          </div>
          <div className="card">
            <p>Braintorm team Bonding activities for our work retreet. </p>
            <img src="../public/imggemini/message.png" alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the Following .</p>
            <img src="../public/imggemini/code.png" alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt Here" />
            <div>
              <img src="../public/imggemini/gallery01.png" alt="" />
              <img src="../public/imggemini/mic.png" alt="" />
              <img src="../public/imggemini/send.png" alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info including about people , so double-check its responses. your privacy and Gemini Apps.</p>
        </div>
      </div>
  </div>
  )
}

export default Front
