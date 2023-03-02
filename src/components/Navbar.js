
function Navbar(){
    return(
        // <div className="navbar">
        //     <h2 className='navbar-item'>Projects</h2>
        //     <h2 className='navbar-item'>Skills</h2>
        //     <h2 className='navbar-item'>About</h2>
        // </div>

        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a>Projects</a>
              </li>
              <li className="nav-item">
                <a>Skills</a>
              </li>
              <li className="nav-item">
                <a >About</a>
              </li>
            </ul>
        </div>
      </nav>
    )
}

export default Navbar;