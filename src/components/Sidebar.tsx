import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './UI/SearchBar'
import UserSelector from './UI/UserSelector'

export default function Sidebar() {
  return (
    <aside className="menu has-bottom-child MainSidebar">
      <ul className="menu-list">
        <li>
          <a className="dropdown is-hoverable is-right no-small-text">
            <span className="icon-text dropdown-trigger">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-account-circle"></i>
              </span>
              <span>username</span>
              <span className="icon arrow is-medium">
                <i className="mdi mdi-24px mdi-chevron-right"></i>
              </span>

            </span>
            <div className="dropdown-menu no-wrap">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon is-medium has-text-primary">
                      <i className="mdi mdi-logout"></i>
                    </span>
                    <span>Logout</span>
                  </span>
                </div>
                <div className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon is-medium has-text-primary">
                      <i className="mdi mdi-open-in-new"></i>
                    </span>
                    <span>View account in EGS</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div className="menu-divider"></div>
      <ul className="menu-list">
        {/* these li with navlink should be exported into ./MenuList.tsx 
            pass in: nav location, <mdi-icon-name> https://materialdesignicons.com, text
        */}
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-view-grid"></i>
              </span>
              <span>Library</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/recents"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-history"></i>
              </span>
              <span>Recent</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/favorites"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-heart"></i>
              </span>
              <span>Favorites</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/store"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-tag"></i>
              </span>
              <span>Store</span>
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="menu-divider"></div>
      <ul className="menu-list">
        <li>
          <div>
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-currency-usd"></i>
              </span>
              <span>Freebie</span>
            </span>
          </div>
        </li>
        <li>
          <NavLink 
            className="SidebarFreebie"
            exact to="/freebie"
          >
            <span className="FreebiePrice has-text-primary has-text-weight-light">40</span>
            <figure className="image is-square">
              {/* freebie art goes here */}
              <img src="https://www.mobygames.com/images/covers/l/688478-untitled-goose-game-macintosh-front-cover.png" alt=""/>
            </figure>
          </NavLink>
        </li>
      </ul>



      <ul className="menu-list stick-to-bottom">
        {/* these li with navlink should be exported into ./MenuList.tsx 
            pass in: nav location, <mdi-icon-name> https://materialdesignicons.com, text
        */}
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/downloads"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-download"></i>
              </span>
              <span>Downloads</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeClassName="has-text-primary" 
            exact to="/settings"
          >
            <span className="icon-text">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-cog"></i>
              </span>
              <span>Settings</span>
            </span>
          </NavLink>
        </li>
        <li>
        <a className="dropdown is-hoverable is-right is-up no-small-text">
            <span className="icon-text dropdown-trigger">
              <span className="icon is-medium has-text-primary">
                <i className="mdi mdi-help-circle"></i>
              </span>
              <span>About Us</span>
              <span className="icon arrow is-medium">
                <i className="mdi mdi-24px mdi-chevron-right"></i>
              </span>

            </span>
            <div className="dropdown-menu no-wrap">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon is-medium has-text-primary">
                      <i className="mdi mdi-coffee"></i>
                    </span>
                    <span>Buy us a Ko-fi</span>
                  </span>
                </div>
                <div className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon is-medium has-text-primary">
                      <i className="mdi mdi-github"></i>
                    </span>
                    <span>Source Code</span>
                  </span>
                </div>
                <div className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon is-medium has-text-primary">
                      <i className="mdi mdi-leaf-maple"></i>
                    </span>
                    <span>Secrets</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </li>
        </ul>

    </aside>


    // <div className="NavBar">
    //   <div className="Links">
    //     <NavLink
    //       activeStyle={{ color: '#FFA800', fontWeight: 500 }}
    //       isActive={(match, location) => {
    //         if (match) {
    //           return true
    //         }
    //         return location.pathname.includes('gameconfig')
    //       }}
    //       exact
    //       to="/"
    //     >
    //       Library
    //     </NavLink>
    //     <NavLink
    //       activeStyle={{ color: '#FFA800', fontWeight: 500 }}
    //       isActive={(match, location) => location.pathname.includes('settings')}
    //       to={{
    //         pathname: '/settings/default/general',
    //       }}
    //     >
    //       Settings
    //     </NavLink>
    //   </div>
    //   <SearchBar />
    //   <UserSelector />
    // </div>
  )
}
