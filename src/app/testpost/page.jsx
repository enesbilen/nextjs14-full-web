import { addPost, deletePost } from "@/lib/action"


const TestPost = () => {

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder='Title' name="title" />
        <input type="text" placeholder='Description' name="desc" />
        <input type="text" placeholder='Slug' name="slug" />
        <input type="text" placeholder='UserID' name="userId" />
        <button>Yeni Post Ekle</button>
      </form>

      <form action={deletePost}>
        <label htmlFor='id'>Silinecek Postun ID:</label>
        <input id='id' name='id' />
        <button>Seçiliyi Sil</button>
      </form>
    </div>
  )
}

export default TestPost