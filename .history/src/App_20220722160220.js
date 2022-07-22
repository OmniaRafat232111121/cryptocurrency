import React from 'react'
import {Switch,Route,} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd'
import {Navbar} from './components';
import './App.css'

import {Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News } from './components'
const App = () => {
  return (
    <div className="app">
    <div className="navbar">
    <Navbar />
    </div>

    <div className="main">
       <Layout>
       <div classname="routes">
       <Switch>
       <Route exact path="/">
         <Homepage />
       </Route>
       <Route exact path="/exchanges">
       <Exchanges/>
       </Route>
       <Route exact path="/cryptocurrencies">
         <Cryptocurrencies/>
       </Route>
       <Route exact path="/crypto/:coinId">
         <CryptoDetails/>
       </Route>
       <Route exact path="/news">
         <News/>
       </Route>
     </Switch>

       </div>
       </Layout>
    </div>

    <div className="footer">

    </div>
    </div>
  )
}

export default App