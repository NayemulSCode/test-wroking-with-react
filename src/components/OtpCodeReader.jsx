import React from 'react'

const OtpCodeReader = () => {
    let digitValidate = function(ele){
        console.log(ele.value);
        ele.value = ele.value.replace(/[^0-9]/g,'');
      }
      
      let tabChange = function(val){
          let ele = document.querySelectorAll('input');
          if(ele[val-1].value !== ''){
            ele[val].focus()
          }else if(ele[val-1].value === ''){
            ele[val-2].focus()
          }   
       }
      
      
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-4 text-center">
                    <div className="row">
                        <div className="col-sm-12 mt-5 bgWhite">
                            <div className="title">
                                Verify OTP
                            </div>
                    
                            <form action="" className="mt-5">
                                <input className="otp" type="text" onInput={digitValidate(this)} onKeyUp={tabChange(1)} maxLength="1" />
                                <input className="otp" type="text" onInput={digitValidate(this)} onKeyUp={tabChange(2)} maxLength="1" />
                                <input className="otp" type="text" onInput={digitValidate(this)} onKeyUp={tabChange(3)} maxlength="1" />
                                <input className="otp" type="text" onInput={digitValidate(this)} onKeyUp={tabChange(4)} maxLength="1" />
                            </form>
                            <hr className="mt-4" />
                            <button className='btn btn-primary btn-block mt-4 mb-4 customBtn'>Verify</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default OtpCodeReader
