import React from 'react';
import styles from './Footer.module.scss';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const iconeProps = {
    color: 'white',
    size: 24,    
}

function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <FaFacebook {...iconeProps} />
            <FaTwitter {...iconeProps} />
            <FaInstagram {...iconeProps} />
        </div>
        <span><a href="https://linkedin.com/in/souzalucas0">Desenvolvido por Lucas Souza</a></span>
    </footer>
  )
}

export default Footer;