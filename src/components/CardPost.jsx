import '../styles/cardPost.css'
import { Link } from 'react-router-dom'
import { PUBLIC_FOLDER } from '../consts'

export function CardPost ({ post }) {
  return (
    <div className='card-post'>
      <div className='card-header'>
        <Link className='link card' to={`/post/${post._id}`}><h3 className='card-title'>{post.title}</h3></Link>
        <div className='card-categories'>
          {post.categories &&
            post.categories.map((category, index) => <span key={index} className='card-category'>{category}</span>)}
        </div>
      </div>
      <div className='card-body'>
        {
          post.photo && <img className='card-body-img' src={`${PUBLIC_FOLDER}${post.photo}`} alt='' />
        }
        <p className='card-body-desc'>
          {post.description}
        </p>
      </div>
      <div className='card-footer'>
        <span>@{post.username}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}
