import { Categories } from '../components/Categories'
import { ListOfPosts } from '../components/ListOfPosts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function HomePage () {
  const [post, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/api/posts${search}`)
      setPosts(res.data)
    }
    fetchPosts()
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
