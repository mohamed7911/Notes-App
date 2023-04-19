import React from 'react'
import styles from '../styles/Note.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Note = ({date,text,remove,index}) => {

  return (
    <div className={styles.note}>
        <span>{text}</span>
        <div className={styles.notefooter}>
            <small>{date}</small>
            <DeleteForeverIcon onClick={()=>remove(index)}/>
        </div>
    </div>
  )
}

export default Note