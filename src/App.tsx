import React, { lazy, useContext } from 'react'

import './App.css'
import { HashRouter } from 'react-router-dom'
import ContextProvider from './state/ContextProvider'

const NavBar = lazy(() => import('./components/Navbar-next'))
const Login = lazy(() => import('./screens/Login'))

function App() {
  const context = useContext(ContextProvider)

  const { user, data: library, refresh } = context

  if (!user && !library.length) {
    return <Login refresh={refresh} />
  }

  //const dlcCount = library.filter((lib) => lib.install.is_dlc)
  //const numberOfGames = library.length - dlcCount.length
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
      </HashRouter>
    </div>
  )
}

export default App
