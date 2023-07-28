import CardWidget from "../CartWidget/CartWidget"

const NavBar = ()=> {
    return(
        <nav>
           <h3>Neta</h3>

           <div>
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
               Zapatillas
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Pantalones
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Remeras
              </a>
            </li>
          </ul>
           </div>
           <CardWidget/>
        </nav>
    )

}

export default NavBar