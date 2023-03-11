import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import Home from './pages/Home';

function App() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate('/');
    }
  }, [navigate, state]);

  return (
    <Routes>
      <Route
        path={'/'}
        element={<Home />}
      />
      <Route
        path={'/create'}
        element={<CreatePage />}
      />
    </Routes>
  );
}

export default App;
