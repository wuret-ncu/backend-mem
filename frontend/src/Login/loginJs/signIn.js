import React from 'react';
import '../loginCss/signIn.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



function Signin() {
    const [shown, setShown] = useState(false);
    const navigate = useNavigate();
    /*** */
    const Login = (e) => {
        e.preventDefault(); //Important!! to prevent linkloop
        async function FetchData() {
            let email = await document.getElementById('email').value;
            let password = await document.getElementById('password').value;
            if (email !== "" && password !== "") {
                async function PostData() {
                    fetch("http://localhost:3001/signin", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, password: password })
                        })
                        .then((res) => {
                            return res.json();
                        })
                        .then(data => {
                            console.log(data[Object.keys(data)[0]]);
                            alert(data[Object.keys(data)[0]]);
                            if (data[Object.keys(data)[0]] === 'Login Successfully')
                                navigate('/homepage', { state: { user: data[Object.keys(data)[1]] } })
                        })

                        .catch((err) => {
                            console.log(err);
                            alert(err);
                        })
                }
                PostData();
            } else if (email === "") {
                alert("Type Email !");
            } else {
                alert("Type Password !");
            }
        }
        FetchData();
    }
    /*** */
    return (
        <form onSubmit={Login}>
            <div className="hero h-full w-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">We can get around that by renting instead of buying a computer. Theres more than one way to skin a cat.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-italic font-semibold">信箱</span>
                                </label>
                                <input type="text" placeholder="email"  id='email' name='email' className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">密碼</span>
                                </label>
                                <input type={shown ? "text" : "password"} placeholder="password" className="input input-bordered"  id='password' name='password' />
                                <div className="form-control">
                                    <label className="label cursor-pointer flex justify-end">
                                        <input type="checkbox" className="toggle mr-2" onChange={() => setShown(!shown)} />
                                        <span className="label-text">顯示密碼</span>
                                    </label>
                                    
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary text-base font-italic ">立即登入</button>
                                <a href='#/forgetpw' className="link link-secondary link-hover text-center mt-3 underline">忘記密碼?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default Signin;