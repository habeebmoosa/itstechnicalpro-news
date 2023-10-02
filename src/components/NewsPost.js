import Axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function NewsPost(props) {
  const [news, setNews] = useState([])

  useEffect(() => {
    Axios.get(
      `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&sortBy=publishedAt&language=en`
    )
      .then((response) => {
        setNews(response.data.articles)
        console.log(response.data.articles)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [props.category])

  return (
    <section className='newsSection'>
      {news && news.length > 0 ? (
        news.map((data) => (
          <div className='newsPost' key={data.title}>
            <div className='newsContent'>
              <div className='newsImage'>
                <img src={data.urlToImage} alt='News' />
              </div>
              <div className='newsTitle'>
                <h4>
                  {data.title && data.title.length > 60
                    ? data.title.substring(0, 60 - 3) + '...'
                    : data.title}
                </h4>
              </div>
              <div className='newsDesc'>
                <p>
                  {data.description && data.description.length > 250
                    ? data.description.substring(0, 250 - 3) + '...'
                    : data.description}
                </p>
              </div>
            </div>
            <div className='newsMoreInfo'>
              <p>{data.author ? data.author : 'Unknown'}</p>
              <button
                className='MoreInfo'
                onClick={() => {
                  window.location.href = data.url
                }}
              >
                More info
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
