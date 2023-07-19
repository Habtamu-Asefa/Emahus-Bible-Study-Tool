import React from 'react'
import {HiSearch} from 'react-icons/hi'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.inner}>
       
        <input placeholder='Search...' className={styles.search}></input>
      </div> 
  )
}

export default Search