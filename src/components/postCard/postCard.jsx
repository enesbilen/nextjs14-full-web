import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>14.02.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa cupiditate illum deserunt neque similique libero ipsa repellendus cumque asperiores aspernatur.</p>
        <Link className={styles.link} href="/blog/test">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard