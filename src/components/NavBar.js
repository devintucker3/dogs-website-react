import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { Button } from './Button';
import "./NavBar.css";

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const clickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        Puppers <i className="fas fa-paw"></i>
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                Get To Know The Puppers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/meet" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Let's Plan A Puppy Playdate!
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline" >Let's Plan A Puppy Playdate</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
