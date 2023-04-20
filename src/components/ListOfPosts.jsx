import '../styles/listsOfPost.css'
import { CardPost } from './CardPost'

export function ListOfPosts ({ posts }) {
  const hasPosts = posts.length > 0
  return (
    <main className={hasPosts ? 'posts-list' : 'post-list-empty'}>
      {hasPosts
        ? (posts.map(post =>
            (<CardPost key={post._id} post={post} />)
          ))
        : (<p style={{ fontSize: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><span>No hay ningún post que mostrar.</span> <span style={{ fontWeight: 'bold' }}>¡Se el primero en escribir sobre esto!</span></p>)}
    </main>
  )
}
