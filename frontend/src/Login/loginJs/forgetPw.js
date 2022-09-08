import React from 'react';
import '../loginCss/forgetPw.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";



function Forgetpw() {
  return (
    <form>
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">WURET Memorandum</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">信箱</span>
                </label>
                <input type="text" placeholder="info@gmail.com" className="input input-bordered" />
              </div>
              <button className="btn btn-primary mt-3">找回密碼</button>
            </div> 
          </div>
        </div>
      </div>
    </form >
  )
}
export default Forgetpw;