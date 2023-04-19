import React from "react";
import styles from "../styles/Note.module.css";



const Addnote = ({handleSave}) => {
  const [noteText, setNoteText] = React.useState("");
  const textLimit =200

    const handleChange = (event)=>{
        if(textLimit-noteText.length>0){       
            setNoteText(prev=>event.target.value)
        }
    }


    const handleClickSave =()=>{
        if(noteText.trim().length>0){
            handleSave(noteText)
            setNoteText("")
        }
    }

  return (
    <div className={`${styles.note} ${styles.new}`}>
      <textarea onChange={handleChange} placeholder="Type to add note" cols="10" rows="8" value={noteText}></textarea>
      <div className={styles.notefooter}>
        <small>{textLimit-noteText.length} remaining</small>
        <button onClick={handleClickSave} className={styles.save}>Save</button>
      </div>
    </div>
  );
};

export default Addnote;
