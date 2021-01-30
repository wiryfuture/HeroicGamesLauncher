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
      
      <div className="navbar-start">
        <div className="navbar-item">

          <label htmlFor="filter" className="label">Filter:</label>
          </div>
        <div className="navbar-item">
          <div className="control">
            <div className="dropdown is-hoverable is-on-top no-small-text smaller-default">
              <div className="dropdown-trigger">
                <div>Installed</div>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <a className="dropdown-item">Installed</a>
                  <a className="dropdown-item">All</a>
                </div>
              </div>
            </div>
          </div>

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
