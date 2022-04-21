import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Routing from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>
);
