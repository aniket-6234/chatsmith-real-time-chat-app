import React from 'react' 
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Login from './components/Login'
import Home from './components/Home'
import ForgetPass from './components/ForgetPass';
import SignUp from './components/SignUp'
import './App.css';


function App() {

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
      </Routes>
    </UserAuthContextProvider>
  )
}


export default App;







// google sign in 

// function App() {
//   const [user] = useAuthState(auth);
//   return (
//     <div>
//       {user ? <Home /> : <Login />}
//     </div>
//   )
// }

