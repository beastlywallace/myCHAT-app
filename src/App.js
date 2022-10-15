import { Register } from './pages/Register';
import './App.css';
import { Login } from './pages/Login';
import Home from './pages/Home';
import "./style.scss";
import {BrowserRouter,Routes, Route,Navigate} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


// import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext)
  console.log("current", currentUser)

   const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  //i.e if theres a user
    return children
   };
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
