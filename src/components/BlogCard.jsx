import React from 'react'

export default function BlogCard({ image, category, title, description, author, date, reading }){
  return (
    <article className="blog-card">
      <div className="media" style={{backgroundImage:`url(${image})`}} aria-hidden="true"></div>
      <div className="content">
        <div className="meta">
          <span className="category">{category}</span>
          <span className="dot">•</span>
          <span className="date">{date}</span>
          <span className="reading"> · {reading}</span>
        </div>
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        <div className="footer">
          <div className="author">
            <img src="/assets/author.jpg" alt="автор" className="author-avatar" />
            <div className="author-info">
              <div className="name">{author}</div>
              <div className="role">Автор блогу</div>
            </div>
          </div>
          <button className="read-btn" aria-label="Читати">Читати</button>
        </div>
      </div>
    </article>
  )
}
