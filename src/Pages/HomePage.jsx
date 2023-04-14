import { Categories } from '../components/Categories'
import { ListOfPosts } from '../components/ListOfPosts'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function HomePage () {
  const [post, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts')
      console.log(res)
    }

    fetchPosts()
  }, [])
  return (
    <div>
      <Categories />
      <ListOfPosts />
    </div>
  )
}
