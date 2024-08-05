import './header'

const Header = () => {
  return (
    <header className="header">
      <h1><b>Marvel</b> information portal</h1>
      <nav>
        <ul>
          <li>
            <a className='active' href="#" >Characters</a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header