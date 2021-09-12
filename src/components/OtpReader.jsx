import React, { useState } from 'react'

const OtpReader = () => {
    const [otp, setOtp] = useState({
        value: '', 
        otp1: "", 
        otp2: "", 
        otp3: "", 
        otp4: "", 
        disable: true
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        console.log(otp);
    }
    const handleChange =(value1, event)=> {

        setOtp({ [value1]: event.target.value });
    }
    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
          console.log("next");
         
            const next = elmnt.target.tabIndex;
            if (next < 5) {
              elmnt.target.form.elements[next].focus()
            }
        }
    
      }
    
    return (
        <form onSubmit={handleSubmit}>
          <h3>otp verifier</h3>
            <div className="otpContainer">
            <input
                name="otp1"
                type="text"
                className="otpInput"
                value={otp.otp1}
                onChange={e => handleChange("otp1", e)}
                autoComplete="off"
                tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}

            />
            <input
                name="otp2"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={otp.otp2}
                onChange={e => handleChange("otp2", e)}
                tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}

            />
            <input
                name="otp3"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={otp.otp3}
                onChange={e => handleChange("otp3", e)}
                tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}

            />
            <input
                name="otp4"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={otp.otp5}
                onChange={e => handleChange("otp4", e)}
                tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
            />
            </div>
            <button className="primary" type="submit">
                Submit
            </button>
      </form>
    )
}

export default OtpReader
