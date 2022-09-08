import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



function Home() {
    const [shown, setShown] = useState(false);
    const navigate = useNavigate();
    return (
        <form >
            <div className="hero bg-base-200 h-full">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left basis-3/5">
                        <h1 className="text-5xl font-bold">Home</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 basis-2/5">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-italic font-semibold">信箱</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">密碼</span>
                                </label>
                                <input type={shown ? "text" : "password"} placeholder="password" className="input input-bordered" />
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

export default Home;