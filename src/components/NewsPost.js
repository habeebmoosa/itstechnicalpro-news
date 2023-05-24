import Axios from 'axios'
import React, { useState , useEffect } from 'react'



export default function NewsPost(props) {    

   const [news, setNews] = useState([])

//    https://newsapi.org/v2/everything?q=${props.category}&apiKey=b3df127a8b4c4cefbc63478a75307b07&sortBy=publishedAt&language=en

    useEffect(() => {
   Axios.get(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=b3df127a8b4c4cefbc63478a75307b07&sortBy=publishedAt&language=en`)
    .then((response) => {
        setNews(response.data.articles)
        console.log(response.data.articles)
    })
    .catch((error) => {
        console.log(error)
    })
    },[props.category])
    

    return (
           <section className='newsSection'>
   
        {
            news.map(data => {
                return (
                    <div className='news'>
                        <div className='newsHeader'>
                          <h2><a href={data.url} target='_blank' rel="noreferrer">{data.title}</a></h2>
                          <span>{data.author}</span>
                        </div>
                        <div className='newsDescription'>
                            <article>
                            {data.description}
                            </article>
                            <span>{data.publishedAt}</span>
                        </div>
                        <div className='newsImg'>
                            <img src={data.urlToImage} alt='News'></img>
                        </div>
                    </div>
                )

            })
        }
        </section>

    )
}


