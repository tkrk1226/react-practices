import React from 'react'
import styles from './assets/scss/Emaillist.scss'
import Email from './Email'
import data from './assets/json/data.json'

const Emaillist = () => {

  return (
    <ul className={styles.Emaillist}>
      {data.map(datum => <Email
                        key={datum.no}
                        firstName={datum.firstName}
                        lastName={datum.lastName}
                        email={datum.email} /> )}
    </ul>
  )
}

export default Emaillist