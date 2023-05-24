import React from 'react'
import NewsPost from '../components/NewsPost'

export default function Apps() {
    const category = "apps"

    return (
        <div className='category'>
            <h2>Apps</h2>
            <hr className='hr'/>
            <NewsPost category={category}/>
        </div>
    )
}
