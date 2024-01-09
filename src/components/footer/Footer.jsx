import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>enesbilen</div>
      <div className={styles.text}>2024 Tüm Hakları Saklıdır.</div>
    </div>
  )
}

export default Footer