import React from 'react';
import '../loginCss/forgetPw.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";



function Forgetpw() {
    // const navigate = useNavigate();
    //const { user, setUser } = useState('E-mail', 'Password');
    return (
        <form>
            <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">WURET Memorandum</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">信箱</span>
                </label>
                <input type="text" placeholder="info@gmail.com" class="input input-bordered" />
              </div>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">找回密碼</button>
              </div>
            </div>
          </div>
        </div>
            {/* <fieldset className='container'>
                <legend className='title'>找回密碼</legend>
                <div className='signin'>
                    <fieldset className='field'><legend>電子郵件</legend><input type='text' id='email' name='email' placeholder='type your email' /></fieldset>
                </div>
                <div><button className='button b1' type='submit'> 找回密碼</button></div>

            </fieldset > */}
        </form >
    )
}

export default Forgetpw;