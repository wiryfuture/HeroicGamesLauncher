import React from 'react'
import { NavLink } from 'react-router-dom'


// this is here for future clean up and refactor. exporting from Sidebar.tsx
export default function MenuList() {
  return (
    <li>
      <NavLink 
        activeClassName="has-text-primary" 
        exact to="/"
        isActive={(match, location) => {
          if (match) {
            return true
          }
          return location.pathname.includes('gameconfig')
        }}
      >
        <span className="icon-text">
          <span className="icon">
            <i className="mdi mdi-view-grid"></i>
          </span>
          <span>Library</span>
        </span>
      </NavLink>
    </li>
    )
  }
  