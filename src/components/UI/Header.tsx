import React from 'react'
import ContextProvider from '../../state/ContextProvider'
import SearchBar from './SearchBar'

interface Props {
  renderBackButton: boolean
  numberOfGames?: number
  goTo: string
  handleFilter?: (value: string) => void
}

// export function toggleFilter(args : string) {
//   //
//   if (args === "all") {
//     // remove is-active from all children of libraryFilter
//     // add is-active to all

//   } else {
//     // remove is-active from all children of libraryFilter
//     // add is-active to installed  
//   }

//   handleFilter(args)}
// }


export default function Header({
  renderBackButton
}: Props) {

  const { refreshLibrary } = React.useContext(ContextProvider)

// feel free to cry after reading this bit lmao 
function toggleFilters (target : EventTarget, filter: string) {
  const elm = target as Element
  const parent = elm.parentElement as Element
  const children = parent.children
  const childElms = Array.from(children)
  
  for (const child of childElms) {
    child.classList.toggle("is-active")
  }

  handleFilter(filter)
}

  return (
    <div className="navbar is-fixed-top libNav">
      
      <div className="navbar-start gameFilter">
        {/* empty navbar item before and after as spacers */}
        <div className="navbar-item"></div>
        <div className="navbar-item libraryFilter">
          <a
            onClick={(e) => toggleFilters(e.target, "installed") }
            className="installed">Installed</a>
          <a 
            onClick={(e) => toggleFilters(e.target, "all") }
          className="all is-active">All</a>
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
