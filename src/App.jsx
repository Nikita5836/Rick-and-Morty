import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routesConfig } from './router/routerConfig';

const App = () => {
  return (
    <div>
      <Routes>
        {routesConfig.map((r, index) => (
          <Route key={index} path={r.path} element={r.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
