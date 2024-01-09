import { getUser } from '@/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'

const PostUser = async ({ userId }) => {

    const user = await getUser(userId);
    console.log(user)
    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user && user.img ? user.img : "/noavatar.png"}
                alt=""
                height={50}
                width={50}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user && user.username ? user.username : "Unknown User"}</span>
            </div>
        </div>
    )
}

export default PostUser