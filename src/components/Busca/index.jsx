import React from 'react'
import styles from './Busca.module.scss'

function Busca() {
  return (
    <div className={styles.busca}>
        <input
            className={styles.input}
            type="text"
            placeholder='O que voçê procura?'
        />
    </div>
  )
}

export default Busca;