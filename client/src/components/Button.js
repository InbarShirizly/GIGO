import React from 'react'
    function getLocation (){
        alert("Hello!")
    }
const Button = () => {


    return (
        <div className = "btn btn-success pulse" onClick = {getLocation}>Upload
            
        </div>
    )
}

export default Button
