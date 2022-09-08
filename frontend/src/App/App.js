import Home from '../Home/Home';
import Login from '../Login/Login';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes className="App">
            <Route exact path='/*' element={<Login />} />
            <Route exact path='/homepage/*' element={<Home />} />  {/*Important: still've route behind homepage, should add '/*' after route path */}
        </Routes>
    )
}

export default App;