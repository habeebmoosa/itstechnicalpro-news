import React from 'react'
import NewsPost from '../components/NewsPost'

export default function Home() {

  const category = "technology"
  return (
    <div className='home'>
      {/* <div className='homeBanner'>
        <div className='homeBannerHeader'>
          <h2>Headlines</h2>
        </div>
        <div className='newsHeadline'>
          <div className='newsHeadlines'>
            <div className='newsHeadlinesImg'>

            </div>
            <div className='newsHeadlinesTitle'>
              
            </div>
          </div>
        </div>
      </div> */}
      <div className='category'>
            <h2>The Latest</h2>
            <hr className='hr'/>
            <NewsPost category={category}/>
        </div>
    </div>
  )
}
