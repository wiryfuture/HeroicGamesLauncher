import './index.sass'
import { NavLink } from 'react-router-dom'
import { SvgIcon } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircleOutlined'
import Apps from '@material-ui/icons/Apps'
import CloudDownload from '@material-ui/icons/CloudDownload'
import Download from '@material-ui/icons/GetAppOutlined'
import Error from '@material-ui/icons/Error'
import Kofi from 'src/assets/kofi.svg'
import React from 'react'
import Settings from '@material-ui/icons/SettingsOutlined'
import SportsEsports from '@material-ui/icons/SportsEsportsOutlined'
import styled from 'styled-components'

//const KofiWrapper = <SvgIcon> <Kofi/> </SvgIcon>
// Styling for NavLink (from react router which compiles to <a>(s))
const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: clamp(40px, 6vh, 50px);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 15px;
  color: var(--text-primary);
  &:hover {
    color: var(--secondary-hover);
  }
`
// Styling for LinkText
const StyledLinkText = styled.p`
  order: 2;
  width: fit-content;
  height: clamp(20px, 2em, 26px);
  font-size: clamp(16px, 1.2em, 30px);
  font-family: cabin;
  margin-block: auto;
`

export default function Link (props: {data_testid: string, text: string, url: string, vector: string}) {
  //  Set vector icon based on vector prop
  //  //  Will set the vector to an error icon if the prop passed doesn't have an icon set to it
  let Vector:  typeof SvgIcon
  switch(props.vector){
  case 'Apps':
    Vector = Apps
    break
  case 'SportsEsports':
    Vector = SportsEsports
    break
  case 'CloudDownload':
    Vector = CloudDownload
    break
  case 'Download':
    Vector = Download
    break
  case 'AccountCircle':
    Vector = AccountCircle
    break
  case 'Settings':
    Vector = Settings
    break
  case 'Kofi':
    Vector = <SvgIcon component={Kofi} />
    break
  default:
    Vector = Error
    break
  }
  // Styling for Vector icons
  const StyledVector = styled(Vector)`
    order: 1;
    margin-block: auto;
    font-size: clamp(24px, 1.75rem, 28px);
  `

  return (
    <StyledNavLink
      className='Link'
      data-testid={`${props.data_testid}`}
      activeClassName={'ActiveLink'}
      isActive={(match, location) => location.pathname.includes(`${props.url}`)}
      exact
      to={`${props.url}`}
    >
      <StyledVector className='LinkVector' />
      <StyledLinkText className='LinkText'>
        {props.text}
      </StyledLinkText>
    </StyledNavLink>
  )
}
