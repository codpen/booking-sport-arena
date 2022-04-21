import logo from '../assets/logo.svg';
import { OutlineButton, SolidButton } from '../components/Buttons';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<div className='flex'>
					<SolidButton text='Login' link='/login' />

					<OutlineButton text='Register' link='/Register' />
				</div>
			</header>
		</div>
	);
}

export default App;
