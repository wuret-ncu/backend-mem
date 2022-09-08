import Signin from './loginJs/signIn';
import Signup from './loginJs/signUp';
import Getpassword from './loginJs/forgetPw';
import './Login.scss'
import { useNavigate } from "react-router-dom";
// import Homepage from '../Homepage/Homepage';
// import './Login.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div data-theme="cupcake" className="h-screen grid grid-rows-20">
            <div className="navbar bg-base-300 min-h-0">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl">Memorandum</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a className="text-2xl font-semibold  text-indigo-900" onClick={() => navigate('/')}>登入</a></li>
                        <li><a className="text-2xl font-semibold text-indigo-900" onClick={() => navigate('/signup')}>註冊</a></li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Signin />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/forgetpw' element={<Getpassword />} />
                {/* <Route exact path='/homepage/*' element={<Homepage />} />
    {/*Important: still've route behind homepage, should add '/*' after route path */ }
            </Routes>
            <footer className="footer footer-center bg-base-300 text-xl font-semibold">
                <div>
                    <p>WURET 111 Side-Project</p>
                </div>
            </footer>

            {/* <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <div className='row-span-3 ...'>01</div>
                <div className='col-span-2 ...'>02</div>
                <div className='row-span-2 col-span-2 ...'>03</div>
            </div> */}
        </div >
    )
}

export default Login;