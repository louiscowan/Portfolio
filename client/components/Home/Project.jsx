import React, { useState } from 'react'
import style from '../../styles/home.scss'

function Project ({h2, p}) {
    const [color, setColor] = useState({
        border: '4px solid red'
      })

    const  changeColor = () => {
       let color = (Math.floor(Math.random()*16777215).toString(16))
       console.log("hello", color)
       setColor({border: `4px solid #${color}`})
    }

    return (
        <div>
            <div onMouseEnter={changeColor} style={color} className='project'>
                <h2>{h2}</h2>
                    <p>
                       {p}
                    </p>
                </div>
        </div>
    )
}

export default Project