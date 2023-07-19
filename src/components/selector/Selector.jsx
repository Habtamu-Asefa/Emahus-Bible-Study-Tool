import React from 'react'
import styles from './selector.module.css'

const Selector = () => {
  return (
    
    <div className={styles.container}>
        
        <select name="option" id="0" autoFocus className={styles.notebooks}>
            <option value="Notebooks" selected>Notebooks</option>
            <option value="Highlights">Highlights</option>
            <option value="Confessions">Confessions</option>
        </select>
    </div>
  )
}

export default Selector