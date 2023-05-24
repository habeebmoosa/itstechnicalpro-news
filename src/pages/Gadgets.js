import React from 'react'
import NewsPost from '../components/NewsPost';

export default function Gadgets() {

    const category = "gadgets"


    return (
        <div className='category'>
            <h2>Gadgets</h2>
            <hr className='hr'/>
            <NewsPost category={category}/>
        </div>
    )
}
