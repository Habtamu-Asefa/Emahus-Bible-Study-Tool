import React from 'react'
import styles from './navbar.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.inner}>
      <div className={styles.tab}>
          <div className={styles.bible}>
            <p>ESV</p>
          </div>
        <p>John</p>
        
      </div>
      <AiOutlinePlusCircle/>
      
      </div>
      

    </div>
  )
}

export default Navbar