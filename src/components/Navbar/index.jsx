import React from 'react';
import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import { BsCart, BsCartFill } from "react-icons/bs";

const iconeProps = {
    color: 'white',
    size: 24
}

function Navbar() {
  return (
    <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <div className={styles.links}>
            <a href="/" className={classNames(styles.link, {
                [styles.selected]: window.location.pathname === '/'
            })}>
                Home
            </a>
        </div>
        <div className={styles.busca}>

        </div>
        <div className={styles.icones}>
            <a href="/carrinho" >
                {window.location.pathname === '/carrinho'
                ? <BsCartFill {...iconeProps}/>
                : <BsCart {...iconeProps} />}
            </a>
        </div>
    </nav>
  )
}

export default Navbar;