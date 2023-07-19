"use client"

import React, { useState } from 'react'
import styles from './recent.module.css'

const Recent = () => {

  const [noteColor, setNoteColor] = useState('blue');

  const handleNoteClick = () => {
    // Change the color on click
    setNoteColor(noteColor === 'blue' ? 'red' : 'blue');
  };

  return (
    <div>
        <h4>Recent</h4>

      <div className={styles.note} onClick={handleNoteClick}>
        <h4>Romans Study </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

      <div className={styles.note}>
        <h4>Romans Study </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

      <div className={styles.note}>
        <h4>Romans Study </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

      <div className={styles.note}>
        <h4>Romans Study </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </div>
  )
}

export default Recent