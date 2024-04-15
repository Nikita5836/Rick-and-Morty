import Episode from '../pages/Episode';
import Location from '../pages/Location';
import NotFount from '../pages/NotFount';
import PersonList from '../pages/PersonList';

export const routesConfig = [
  {
    path: '/',
    element: <PersonList />,
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
];
