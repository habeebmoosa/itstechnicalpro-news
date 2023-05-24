import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='leftSection'>
      <header className='header'>
        <h1><Link className="titleHeading" to="/">itstechnicalpro</Link></h1>
      </header>
      <nav className='navBar'>
        <ul>
            <li><Link className="removeLinkDecoration" to="/ai">AI</Link></li>
            <li><Link className="removeLinkDecoration" to="/crypto">Crypto</Link></li>
            <li><Link className="removeLinkDecoration" to="/gadgets">Gadgets</Link></li>
            <li><Link className="removeLinkDecoration" to="/startups">Startups</Link></li>
            <li><Link className="removeLinkDecoration" to="/apps">Apps</Link></li>
        </ul>
      </nav>
    </div>
  )
}
