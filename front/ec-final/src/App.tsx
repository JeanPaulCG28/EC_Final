import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rutas from './route-config';

function App() {
  return (
    <div className="container">
      <ComponenteMenu/>
      <BrowserRouter>
      <Routes>
       {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>}/>)}
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
