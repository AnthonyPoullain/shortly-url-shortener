import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/**
 * A React component that serves as a layout for the entire application.
 * It includes a header, a main section, and a footer.
 *
 * @returns {JSX.Element} The JSX element that represents the layout.
 */
function Layout(): JSX.Element {
	return (
		<div id="app">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
