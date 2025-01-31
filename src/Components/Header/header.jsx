// import './header.css'

// const Header = () => {
//     return (
//         <>
//         <header className = 'header'>
//             <section className='portfolio-header-name'>
//                 <h1>K<span>elvin</span></h1>
//             </section>
//             <nav className = 'navbar'>
//                 <ul className='portfolio-header-links'>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Services</li>
//                     <li>Tech Stack</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//         </>
//     )
// }

// export default Header

import { useState } from "react";
import "./header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(){
        setMenuOpen(prevState => !prevState)
        console.log(menuOpen);
    }

    return (
        <>
            <header className="header">
                <section className="portfolio-header-name">
                    <h1>K<span>elvin</span></h1>
                </section>
                <nav className="navbar">
                    <ul className={`portfolio-header-links ${menuOpen ? "active" : ""}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Tech Stack</li>
                        <li>Contact</li>
                    </ul>
                    {/* Hamburger Menu Icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        ☰
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
