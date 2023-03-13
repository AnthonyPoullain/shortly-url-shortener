import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { Home } from './pages';

const PUBLIC_URL = '/shortly-url-shortener/';

function App() {
	return (
		<BrowserRouter basename={PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
