import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextProvider from '../../state/ContextProvider'

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
  const { filter, libraryStatus } = useContext(ContextProvider)
  const haveDownloads = libraryStatus.filter(
    (game) => game.status === 'installing' || game.status === 'updating'
  ).length

  return (
    <></>



    // <>
    //   <div className="header">
    //     <section className="section">
    //       <div className="container is-fluid">
    //           <h1 className="title">
    //               Bulma
    //           </h1>
    //           <p className="subtitle">
    //               Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
    //           </p>
    //           <div className="field">
    //               <div className="control">
    //                   <input className="input"
    //                         type="text"
    //                         placeholder="Input"></input>
    //               </div>
    //           </div>
    //           <div className="field">
    //               <p className="control">
    //                   <span className="select">
    //                       <select>
    //                           <option>Select dropdown</option>
    //                       </select>
    //                   </span>
    //               </p>
    //           </div>
    //           <div className="buttons">
    //               <a className="button is-primary">Primary</a>
    //               <a className="button is-link">Link</a>
    //           </div>
    //       </div>
    //   </section>
    //     {handleFilter && (
    //       <span className="selectFilter">
    //         <span>Filter:</span>
    //         <span
    //           className={filter === 'all' ? 'selected' : ''}
    //           onClick={() => handleFilter('all')}
    //         >
    //           All
    //         </span>
    //         <span
    //           className={filter === 'installed' ? 'selected' : ''}
    //           onClick={() => handleFilter('installed')}
    //         >
    //           Ready
    //         </span>
    //         <span
    //           className={filter === 'uninstalled' ? 'selected' : ''}
    //           onClick={() => handleFilter('uninstalled')}
    //         >
    //           Not Ready
    //         </span>
    //         <span
    //           className={filter === 'downloading' ? 'selected' : ''}
    //           onClick={() => handleFilter('downloading')}
    //         >
    //           {`Downloading ${haveDownloads > 0 ? `(${haveDownloads})` : ''}`}
    //         </span>
    //       </span>
    //     )}
    //     {Boolean(numberOfGames) && (
    //       <span className="totalGamesText">Total Games: {numberOfGames}</span>
    //     )}
    //     {renderBackButton && (
    //       <div className="leftCluster">
    //         <Link className="returnLink" to={goTo}>
    //           <span className="material-icons">arrow_back</span>
    //           Return
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // </>
  )
}
