import './App.css';
import { Routes, Route } from "react-router-dom";
import { Nav } from './component/Nav';
import { Home } from './views/Home';
import { About } from './views/About';
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { ProtectedRoutes } from './ProtectedRoutes';
import { AuthProvider } from './useAuth';

function App() {
  return (
    <>
    <AuthProvider>
      <Nav />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
