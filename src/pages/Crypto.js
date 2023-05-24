import React from 'react'
import NewsPost from '../components/NewsPost'

export default function Crypto() {
  const category = "cryptocurrency"

    return (
        <div className='category'>
            <h2>Crypto</h2>
            <hr className='hr'/>
            <NewsPost category={category}/>
        </div>
    )
}
