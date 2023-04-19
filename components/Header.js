import React from 'react'
import styles from '../styles/Note.module.css'
const Header = () => {
  const [darkMode,setDarkMode] = React.useState(true)

  const setTheme = ()=>{
    setDarkMode(prev=>!prev)
    if(darkMode){
      document.documentElement.setAttribute('data-theme',"dark");
      localStorage.setItem('theme',"dark")
    }else{
      document.documentElement.setAttribute('data-theme',"white");
      localStorage.setItem('theme',"white")
    }


  }

  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={setTheme} className={styles.save1}>Toggle Mode</button>
    </div>
  )
}

export default Header