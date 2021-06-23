import './index.sass'

import React, { useContext, useState } from 'react'

import { useTranslation } from 'react-i18next'
import Close from '@material-ui/icons/Close'
import ContextProvider from 'src/state/ContextProvider'
import Search from '@material-ui/icons/Search'

export default function SearchBar() {
  const { handleSearch } = useContext(ContextProvider)
  const [textValue, setTextValue] = useState('')
  const { t } = useTranslation()

  return (
    <div className='SearchBar'>
      <div className='SearchBarFlex'>
        <div className='SearchInputFlex'>
          <input
            data-testid="searchInput"
            className="SearchInput"
            value={textValue}
            onChange={(event) => {
              setTextValue(event.target.value)
              handleSearch(event.target.value)
            }}
            placeholder={t('search')}
            id="search"
          />
          {textValue.length > 0 && (
            <Close
              onClick={() => {
                setTextValue('')
                handleSearch('')
              }}
              className="material-icons close SearchCloseIcon"
              data-testid="closeButton"
            />
          )}
          {textValue.length === 0 && (
            <label htmlFor="search">
              <Search
                onClick={() => handleSearch(textValue)}
                className="material-icons SearchIcon"
                data-testid="searchButton"
              />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}
