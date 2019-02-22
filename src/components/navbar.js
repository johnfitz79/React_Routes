import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div>
    <Link to='/'><button>Home</button></Link><Link to='/happy'><button>Happy</button></Link><Link to='/sleepy'><button>Sleepy</button></Link><Link to='/guilty'><button>Guilty</button></Link>
    </div>
    )
}

export default Navbar
