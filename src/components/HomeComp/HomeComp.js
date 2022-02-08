import React from 'react'
import './homeComp.css'


const HomeComp = () => {

function test() {
    window.location.href = '/projects'
}

  return (
    <div>
        <div className='main-container'>
            <h1>Will</h1>
            <button onClick={test}>view projects</button>
        </div>
    </div>
  )
}

export default HomeComp;