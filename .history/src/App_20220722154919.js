import React from 'react'
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd'
import {Navbar} from './components';
import './App.css'
const App = () => {
  return (
    <div className="app">
    <div className="navbar">
    <Navbar />
    </div>

    <div className="main">
       <Layout>
       <div classname="routes">
       <switch>
       <Route exact Path="/">
         <HomePage/>
       </Route>
       </switch>

       </div>
       </Layout>
    </div>

    <div className="footer">

    </div>
    </div>
  )
}

export default App