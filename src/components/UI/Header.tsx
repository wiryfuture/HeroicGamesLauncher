import React from 'react'
import ContextProvider from '../../state/ContextProvider'
import SearchBar from './SearchBar'

interface Props {
  renderBackButton: boolean
  numberOfGames?: number
  goTo: string
  handleFilter?: (value: string) => void
}

export default function Header({
  renderBackButton
}: Props) {

  const { refreshLibrary } = React.useContext(ContextProvider)

  return (
    <div className="navbar is-fixed-top libNav">
      
      <div className="navbar-start gameFilter">
        {/* empty navbar item before and after as spacers */}
        <div className="navbar-item"></div>
        <div className="navbar-item libraryFilter">
          <a>Installed</a>
          <a className="is-active">All</a>
        </div>
      </div>

      <div className="navbar-item field force-center">
        <SearchBar />
      </div>
      
      <div className="navbar-end">
        <div className="navbar-item changeView">
          <a className="icon is-medium is-active">
            <i className="mdi mdi-24px mdi-view-module"></i>
          </a>
          <a className="icon is-medium">
            <i className="mdi mdi-24px mdi-view-list"></i>
          </a>
        </div>
        <div className="navbar-item">
          <a 
            onClick={() => refreshLibrary()}
            className="icon is-medium has-text-primary refreshLib">
              <i className="mdi mdi-24px mdi-cached"></i>
            </a>
        </div>
        <div className="navbar-item"></div>
      </div>

    </div>
  )
}
