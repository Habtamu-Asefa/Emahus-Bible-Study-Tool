
import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar'
import Body from '@/components/body/Body'
import styles from './page.module.css'
import Selector from '@/components/selector/Selector'

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>      
      
     <div className={styles.main}>
        <Navbar/>
        <Body/>
      </div> 
    </div>
  );
};


export default Home