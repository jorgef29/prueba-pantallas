import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { FormProductos } from './components/FormProductos.jsx'
import { ListadoProveedores } from './components/ListadoProveedores.jsx'
import { NavBarMine } from './components/NavBarMine.jsx'
import { ListadoPedidosCompras } from './components/ListadoPedidosCompras.jsx'
import ListarDepositos from './components/ListarDepositos.jsx'
import ListarProducto from './components/ListarProductos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
    <FormProductos/>
     <ListadoProveedores/> 
     <FormProductos/>
      <ListadoPedidosCompras/>
*/}
    <NavBarMine/>
      <ListarProducto/>
     </React.StrictMode>,
)
