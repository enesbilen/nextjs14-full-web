import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

/* 
cache: "no-store":
 -Forces the browser cache not to be used and always makes a network request.
 -The browser does not use the data in the cache and always retrieves the most recent data from the server.

cache: "force-cache":
 -Forces the browser cache to use.
 -The browser retrieves data from the cache and uses it if the data is not expired.
 -If it has expired, the browser will not make a new request and will use the old data in the cache. 
 
 next:{revalidate:3600} :
  - When the first request arrives, the page is statically generated and served to the user.
  - At the same time, the server asynchronously receives new data and updates the content of the page.
  - Each time a new request arrives, if the specified time (1 hour) has elapsed, the page is updated in the background and the updated content is served when the next request arrives.
  - This process takes place between users' requests, so users are always served up-to-date content.
 */

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

const BlogPage = async () => {

  const posts = await getData();

  // FETCH DATA WITOUT AN API
  /*   const posts = await getPosts(); */
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}

    </div>
  )
}

export default BlogPage