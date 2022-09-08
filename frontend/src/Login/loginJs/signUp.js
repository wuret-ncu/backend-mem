import React from 'react';
import '../loginCss/signUp.scss';
import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";



function Signup() {
  const [shown, setShown] = useState(false);
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
                  <span className="label-text">姓名</span>
                </label>
                <input type="text" placeholder="王忠明" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">信箱</span>
                </label>
                <input type="text" placeholder="info@gmail.com" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">密碼</span>
                </label>
                <input type={shown ? "text" : "password"} placeholder="password" className="input input-bordered" />
                <div className="form-control">
                  <label className="label cursor-pointer flex justify-end">
                    <input type="checkbox" className="toggle mr-2" onChange={() => setShown(!shown)} />
                    <span className="label-text">顯示密碼</span>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">立即註冊</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form >
  )
}
function Showpassword() {
  if (document.getElementById('showpassword').checked === true) {
    document.getElementById('password').type = 'text';
  }
  else
    document.getElementById('password').type = 'password';
};

export default Signup;