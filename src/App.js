import React, { memo } from 'react'
import {renderRoutes} from "react-router-config"

import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import routes from "./router"
import store  from "./store"

import ZDAppheader from "@/components/app-header"
import ZDAppfooter from "@/components/app-footer"

import ZDAppPlayerBar from "@/pages/player/app-player-bar"



export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZDAppheader/>
        {renderRoutes(routes)}
        <ZDAppfooter/>
        <ZDAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})



