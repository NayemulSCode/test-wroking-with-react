import React from 'react'

const TogglePassword = () => {
    const toggleVisibility =async()=>{
        // var sound = new Audio('/download/button-15.mp3'); 
        const getPassword = document.getElementById("password");
        if(getPassword.type === "password"){
            getPassword.type = "text";
            const audio = document.getElementById("audio");  
            await audio.play(); 
        }
        else{
            getPassword.type = "password";
            const audio = document.getElementById("audio");  
            await audio.play()
        } 
    }

    return (
        <div>
            <h1>Toggle password</h1>
            
            <form>
                <input type="password" id="password" />
                <audio id="audio" src="https://www.soundjay.com/buttons/sounds/button-16.mp3"></audio>
                <span><input type="checkbox" onClick={toggleVisibility}/>Show Password </span> 
            </form>
        </div>
    )
}

export default TogglePassword
