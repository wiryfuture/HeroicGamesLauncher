import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextProvider from '../../state/ContextProvider'
import SearchBar from './SearchBar'

interface Props {
  renderBackButton: boolean
  numberOfGames?: number
  goTo: string
  handleFilter?: (value: string) => void
}

export default function Header({
  renderBackButton,
  numberOfGames,
  handleFilter,
  goTo,
}: Props) {

  return (
    <div className="navbar is-fixed-top libNav">
      
      <div className="navbar-start gameFilter">
        <div className="navbar-item">
          <a>Installed</a>
        </div>
        <div className="navbar-item">
          <a>All</a>
        </div>
      </div>

      <div className="navbar-item field force-center">
        <SearchBar />
      </div>
      
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable is-right">
        </div>
      </div>

    </div>
  )
}
