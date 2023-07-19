import React from 'react'
import styles from './folder.module.css'
import {MdArrowDropDown} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'



const Folder = () => {
  return (
    <div>
         
        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <h4>Folders</h4>
        <AiOutlinePlusCircle/>
        </div> 
      <div className={styles.addnote}>
        <p><AiOutlinePlus/>Add Note</p>
      </div>

      <div className={styles.list}>
        <p>Romans Study 1</p>
        <MdArrowDropDown/>
      </div>

      <div className={styles.addnote}>
        <p>+Add Note+</p>
      </div>

      <div className={styles.list}>
        <p>Romans Study 1</p>
        <MdArrowDropDown/>
      </div>

      <div className={styles.list}>
        <p>Romans Study 1</p>
        <MdArrowDropDown/>
      </div>

    </div>
  )
}

export default Folder