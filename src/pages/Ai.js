import React from 'react'
import NewsPost from '../components/NewsPost'

export default function Ai() {
    const category = "ai"

    return (
        <div className='category'>
            <h2>Artificial Intelligence</h2>
            <hr className='hr'/>
            <NewsPost category={category}/>
        </div>
    )
}
