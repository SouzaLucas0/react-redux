import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';

function ParginaPadrao() {
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles['container-outlet']}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default ParginaPadrao;