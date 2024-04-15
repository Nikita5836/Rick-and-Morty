import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routesConfig } from './router/routerConfig';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routesConfig.map((r, index) => (
          <Route key={index} path={r.path} element={r.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
