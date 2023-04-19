import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({searchText,setSearchText}) => {
    const[darkMode,setDarkMode] = React.useState(false)
  return (
    <div className='search'>
        <SearchIcon/>
        <input onChange={(event)=>setSearchText(event.target.value)} value={searchText} className='' type="text" placeholder='search...' />
    </div>
  )
}

export default Search