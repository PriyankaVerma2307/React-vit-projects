import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="fullcontainer">
      <div className="firstdiv">
        <Link to="/login"
        className="link01">Login</Link>
        <Link to="/Signup"
        className="link02">Signup</Link>
       </div>
       <div className="seconddiv">
        <h1>WELCOME</h1>
        <p>The size of the universe is unknown, and it may be infinite.<br/>
        The observable universe, which is the portion of <br/>the universe that we can see from Earth, <br/>is about 93 billion light-years in diameter.</p>
        <button>Get Started</button>
       </div>
    </div>
  )
}

export default Home
