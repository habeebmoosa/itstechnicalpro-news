import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {

  const [modeCheck, setModeCheck] = useState(false);

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
      
        <label class="switch">
          <input type="checkbox" className='toggle' onClick={()=>{

            setModeCheck(!modeCheck)
            const body = document.querySelector('body')
            const linksColor = document.querySelectorAll('.removeLinkDecoration')
            if(modeCheck) {
              linksColor.forEach(link => {
                link.style.color = '#585858'
              })
              body.style.backgroundColor = 'white'
              body.style.color = 'black'
              localStorage.setItem('theme', 'light')
            }
            else {
              linksColor.forEach(link => {
                link.style.color = 'white'
              })
              body.style.backgroundColor = 'black'
              body.style.color = 'white'
              localStorage.setItem('theme', 'dark')
            }
          }}/>
            <span class="slider round"></span>
        </label>
    </div>
  )
}
