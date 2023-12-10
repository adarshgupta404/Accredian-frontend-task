import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from './pages/ForgotPassword';
import Main from './pages/Main';

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/main" exact element={<Main />}></Route>
        <Route path="/reset-password" exact element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}