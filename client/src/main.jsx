import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './pages/landing.jsx';

import App from './App.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1 className='display-2'>Wrong page!</h1>,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			// {
			//   path: '/admin',
			//   element: <Admin />
			// }
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
