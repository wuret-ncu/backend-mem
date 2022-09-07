import React from 'react';
import '../loginCss/signUp.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";



function signup() {
    //const navigate = useNavigate();
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
                        <span class="label-text">姓名</span>
                      </label>
                      <input type="text" placeholder="王忠明" class="input input-bordered" />
                      </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">信箱</span>
                      </label>
                      <input type="text" placeholder="info@gmail.com" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">密碼</span>
                      </label>
                      <input type="text" placeholder="132abc" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                      <button class="btn btn-primary">立即註冊</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
{/* <fieldset className='container'>
                <legend className='title'>註冊</legend>
                <div className='signin'>
                    <fieldset className='field'><legend>姓名</legend><input type='name' id='name' name='name' placeholder='type your name' /></fieldset>
                    <fieldset className='field mt-5'><legend>信箱</legend><input type='text' id='email' name='email' placeholder='type your email' /></fieldset>
                    <fieldset className='field'><legend>密碼</legend><input type='password' id='password' name='password' placeholder='type your password' /></fieldset>
                    
                    <div className='showpassword'><input type='checkbox' id='showpassword' onChange={() => Showpassword()} />顯示密碼</div>
                </div>
                <div><button className='button b1' type='submit'> 立即註冊</button></div>
                </fieldset > */}
        </form >
    )
}

function Showpassword() {
    if (document.getElementById('showpassword').checked === true) {
        document.getElementById('password').type = 'text';
    }
    else
        document.getElementById('password').type = 'password';
}

export default signup;