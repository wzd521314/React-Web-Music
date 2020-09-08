import React, { memo } from 'react'
import {renderRoutes} from "react-router-config"

import routes from "./router"

import ZDAppheader from "@/components/app-header"
import ZDAppfooter from "@/components/app-footer"
import {HashRouter} from 'react-router-dom'


export default memo(function App() {
  return (
    <HashRouter>
      <ZDAppheader/>
      {renderRoutes(routes)}
      <ZDAppfooter/>
    </HashRouter>
  )
})



