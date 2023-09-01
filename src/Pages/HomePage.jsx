import { Categories } from '../components/Categories'
import { ListOfPosts } from '../components/ListOfPosts'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { fetchPosts } from '../services/post.service'

export function HomePage () {
  const [post, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    fetchPosts({ search }).then((res) => setPosts(res.data))
  }, [search])

  return (
    <div>
      <Header />
      <Categories />
      <ListOfPosts posts={post} />
      <Footer />
    </div>
  )
}
