import { spawn } from 'child_process'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContextProvider from '../../state/ContextProvider'
import { GameStatus } from '../../types'
const { ipcRenderer } = window.require('electron')
interface Card {
  cover: string
  logo: string
  title: string
  appName: string
  isInstalled: boolean
}

interface InstallProgress {
  percent: string
  bytes: string
}

const GameCard = ({ cover, title, appName, isInstalled, logo }: Card) => {
  const [progress, setProgress] = useState({
    percent: '0.00%',
    bytes: '0/0MB',
  } as InstallProgress)

  const { libraryStatus } = useContext(ContextProvider)

  const gameStatus: GameStatus = libraryStatus.filter(
    (game) => game.appName === appName
  )[0]

  const { status } = gameStatus || {}
  const isInstalling = status === 'installing' || status === 'updating'
  const isReparing = status === 'repairing'
  const isMoving = status === 'moving'

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (isInstalling) {
        ipcRenderer.send('requestGameProgress', appName)
        ipcRenderer.on(
          `${appName}-progress`,
          (event: any, progress: InstallProgress) => setProgress(progress)
        )
      }
    }, 500)
    return () => clearInterval(progressInterval)
  }, [isInstalling, appName])

  const { percent } = progress
  const effectPercent = isInstalling
    ? `${150 - Number(percent.replace('%', ''))}%`
    : '100%'

  return (
    <div
      className="gameCard card"
    >
      <div className="cardWrap">

      {isMoving && <span className="progress">Moving...</span>}

        {isInstalling && <span className="progress">{percent}</span>}
        
      {isReparing && <span className="progress">Repairing...</span>}


        <Link 
          to={{
            pathname: `/gameconfig/${appName}`,
          }}
          className={`card-image ${!isInstalled ? `grayscale` : ``}`}
        >
          <figure className="image">
            <img
              alt="cover-art"
              src={cover}
            />
          </figure>
        </Link>
        
        <div className={`card-content topCard`}>
          {logo && (
            <img
              alt="logo"
              src={logo}
              className={`gameLogo ${!isInstalled ? `grayscale` : ``}`}
            />
          )}
        </div>

        <div className={`card-content bottomCard ${logo ? `hasLogo` : ``}`}>
          <div className="media-content">
            
            {!isInstalled && (
              <span className="installButton">
                <span className="icon is-large has-text-info">
                  <i className="mdi mdi-36px mdi-download"></i>
                </span>
                <div className="background"></div>
              </span>
            )}

            {isInstalling && (
              // installing css mask fancy stuff
              <span></span>
            )}

            {isInstalled && (
              <span className="playButton">
                <span className="icon is-large has-text-success">
                  <i className="mdi mdi-36px mdi-play"></i>
                </span>
                <div className="background"></div>
              </span>
            )}

          </div>
        </div>
        
        {/* <div className="gameTitle">
          <span>{title}</span>
          <i
            className={`material-icons ${
              isInstalled ? 'is-success' : 'is-primary'
            }`}
          >
            {isInstalled ? 'play_circle' : 'get_app'}
          </i>
        </div> */}
      </div>
    </div>
  )
}

export default GameCard
