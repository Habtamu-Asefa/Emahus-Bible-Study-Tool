import React from 'react'
import styles from './sidebar.module.css'
import Search from '../search/Search'
import Selector from '../selector/Selector'
import Recent from '../recent/Recent'
import Folder from '../folder/Folder'


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Search/>
      <Selector/>
      <Recent/>
      
     
    
      <br/>
      <hr/>
    <Folder/>
     
    </div>
     
  
  )
}

export default Sidebar