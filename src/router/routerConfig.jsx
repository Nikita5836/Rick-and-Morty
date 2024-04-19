import Characters from '../pages/Characters/Characters'
import Episode from '../pages/Episode'
import Home from '../pages/Home'
import Location from '../pages/Location'
import NotFount from '../pages/NotFount'

export const routesConfig = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/characters',
		element: <Characters />,
	},
	{
		path: '/location',
		element: <Location />,
	},
	{
		path: '/episode',
		element: <Episode />,
	},
	{
		path: '*',
		element: <NotFount />,
	},
]
