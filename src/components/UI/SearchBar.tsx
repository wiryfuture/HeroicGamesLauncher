import React, { useContext, useState } from 'react'
import ContextProvider from '../../state/ContextProvider'

export default function SearchBar() {
  const { handleSearch } = useContext(ContextProvider)
  const [textValue, setTextValue] = useState('')

  return (
    <div className="searchBar field">
      <div className="control has-icons-left has-icons-right">

        <input
          className="searchInput input"
          value={textValue}
          onChange={(event) => {
            setTextValue(event.target.value)
            handleSearch(event.target.value)
          }}
          placeholder={'Search my library'}
        />

        <span className="icon has-text-primary is-left">
          <i className="mdi mdi-24px mdi-magnify"></i>
        </span>

        {textValue.length > 0 && (
        <span
          onClick={() => {
            setTextValue('')
            handleSearch('')
          }}
          className="icon has-text-primary closeButton is-right"
        >
          <i className="mdi mdi-24px mdi-close"></i>
        </span>
      )}
      </div>

    </div>
  )
}
