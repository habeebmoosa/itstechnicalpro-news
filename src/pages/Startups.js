import React from 'react'
import NewsPost from '../components/NewsPost'

export default function Startups() {
    // const category = "startups"


    return (
        <div className='category'>
            <h2>Startups</h2>
            <hr className='hr'/>
            <NewsPost category={"startups"}/>
        </div>
    )
}
