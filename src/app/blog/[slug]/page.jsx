import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div><div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src="/noavatar.png"
          alt=""
          fill
          className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/brands.png"
            alt=""
            
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Joe Doe</span>
          </div>          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>20.02.2023</span>
          </div>
        </div>
        <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, deserunt!</div>
      </div>
    </div></div>
  )
}

export default SinglePostPage