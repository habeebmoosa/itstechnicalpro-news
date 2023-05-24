import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <section className='subsciptionSection'>
        <input type='email' required placeholder='Enter email to subscribe'></input>
        <button>Subscribe</button>
      </section>
      <section className='copyrightSection'>
         <span>Copyright @ itstechnicalpro</span>
      </section>
    </footer>
  )
}
