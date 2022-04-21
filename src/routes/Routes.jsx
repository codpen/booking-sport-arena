import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
