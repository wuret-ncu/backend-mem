import React from 'react';
import '../loginCss/signIn.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



function Signin() {
    const navigate = useNavigate();
    //const { user, setUser } = useState('E-mail', 'Password');
    return (
        <form data-theme="cupcake">
            <div data-theme="cupcake" className="hero bg-base-200 h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-left">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">信箱</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">密碼</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button className='button b3' type='button' onClick={() => navigate('/signup')}>未註冊?</button>
                                    <a className="label-text-alt link link-hover" onClick={() => navigate('/forgetpw')}>忘記密碼?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">立即登入</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
            </div> */}
            {/* <fieldset className="m-auto border-2 w-1/4 border-black px-10">
                <legend className='title text font-bold text-4xl'>登入</legend>
                <div className="form-control">
                    <label className="input-group py-5">
                        <span>信箱</span> 
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full  max-w-xs" />
                    </label>
                    <label className="input-group py-5">
                        <span>密碼</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full  max-w-xs" />
                    </label>
                </div>
                <div><button className='btn btn-outline btn-primary w-full my-2' type='submit'> 立即登入</button></div>
                <div className='other'>
                    <button className='btn btn-outline btn-secondary w-full my-2' type='button' onClick={() => navigate('/forgetpw')}>忘記密碼?</button>
                    <button className='button b3' type='button' onClick={() => navigate('/signup')}>未註冊?</button>
                </div>
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

export default Signin;