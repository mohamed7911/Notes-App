import React from 'react'
import styles from '../styles/Noteslist.module.css'
import Note from './Note'
import {nanoid} from 'nanoid'
import Addnote from './Addnote'
import Search from './Search'
import Header from './Header'



const Noteslist = () => { 



  const [notes,setNotes] = React.useState([
    {
      id:nanoid(),
      text:'This is my first note',
      date: '15/04/2021',
    },
    {
      id:nanoid(),
      text:'This is my first note',
      date: '15/04/2021',
    },
    {
      id:nanoid(),
      text:'This is my first note',
      date: '15/04/2021',
    },
  ])
  
  const initialRender = React.useRef(true);

  React.useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("notes"))
    if(savedNotes){
      setNotes(savedNotes)
    }
  }
  ,[])

  React.useEffect(()=>{
    if (initialRender.current) {
      initialRender.current = false;
      return;
  }
    localStorage.setItem("notes",JSON.stringify(notes))
  }
  ,[notes])


  

  const [searchText,setSearchText] = React.useState('')

  const handleSave = (text)=>{
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  const handleDelete =(index)=>{
    const ns = [...notes]
    ns.splice(index,1)
    setNotes(ns)
  }

  return (
    <>
      <Header/>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <div className={styles.notelist}>
        {(notes.filter((e)=>e.text.toLocaleLowerCase().includes(searchText))).map((e,ix)=>(
          <Note key={e.id} text={e.text} index={ix} date={e.date} remove={handleDelete}/>
          )
        )}
        <Addnote handleSave={handleSave}/>
      </div>
    </>
  )
}

export default Noteslist