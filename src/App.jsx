import React from 'react'
import BlogCard from './components/BlogCard'

export default function App(){
  const post = {
    category: 'Дизайн',
    title: 'Як створити естетичну картку блогу в React',
    description: 'Короткий огляд підходів до сучасного UI: композиція, типографіка та інтерфейсні деталі.',
    author: 'Музиря Артем',
    date: '1 листопада 2025',
    reading: '4 хв'
  }

  return (
    <main className="app-root">
      <BlogCard {...post} image="/assets/cover.jpg" />
    </main>
  )
}
