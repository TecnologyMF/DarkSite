import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBarStyle.css'
function NavBar() {
    const [toggle, setToggle] = useState(true)
    return (
        <Fragment>
            <nav className={toggle ? '' : 'NavBarColor'}>
                <div className='nav-options'>
                   
                    <h1 id={toggle ? '' : 'heading'}>DELFLIX</h1>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span> 
                    <span id={toggle ? 'Movies' : 'TrendingLight'}>Trending</span>
                    <span id={toggle ? 'Movies' : 'PricingLight'}>Pricing</span>

                    <div className="input-group">

                    <input type="text" placeholder='Busca Lo Que Quieras' />
                    <HiSearch fontSize={20} color="green" id='search'/> 
                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                </div>
                </div>
                </div>
            </nav>
           
        </Fragment>
    )
}

export default NavBar 