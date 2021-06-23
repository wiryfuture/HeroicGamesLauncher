import './index.sass'

import { useTranslation } from 'react-i18next'
import React, { lazy} from 'react'
import styled from 'styled-components'
//import { NavLink } from 'react-router-dom'
//import { createNewWindow } from 'src/helpers'
//import { useTranslation } from 'react-i18next'

const SearchBar = lazy(() => import('./components/SearchBar'))
const Link = lazy(() => import('./components/Link'))
//const UserSelector = lazy(() => import('../Navbar/components/UserSelector'))

const Gap = styled.div`
  width: 100%;
  height: 100%;
  margin-block: auto;
`

export default function NavBar () {
  // Translation func
  const { t } = useTranslation()
  return (
    <div className='NavBar'>
      <div className='NavFlex'>
        <SearchBar />
        <Link
          data_testid={'library'}
          text={t('Library')}
          url={'/library'}
          vector={'Apps'}
        />
        <Link
          data_testid={'readytoplay'}
          text={'ReadyToPlay'}
          url={'/ready-to-play'}
          vector={'SportsEsports'}
        />
        <Link
          data_testid={'notinstalled'}
          text={'NotInstalled'}
          url={'/not-installed'}
          vector={'CloudDownload'}
        />
        <Link
          data_testid={'downloads'}
          text={'Downloads'}
          url={'/downloads'}
          vector={'Download'}
        />
        <Gap />
        <Link
          data_testid={'user'}
          text={'Username'}
          url={'/user'}
          vector={'AccountCircle'}
        />
        <Link
          data_testid={'settings'}
          text={t('Settings')}
          url={'/settings'}
          vector={'Settings'}
        />
        <Link
          data_testid={'kofi'}
          text={'Kofi'}
          url={'/kofi'}
          vector={'Kofi'}
        />
      </div>
    </div>
  )
}
