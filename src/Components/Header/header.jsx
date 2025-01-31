import './header.css'

const Header = () => {
    return (
        <>
        <header className = 'header'>
            <section className='portfolio-header-name'>
                <h1>K<span>elvin</span></h1>
            </section>
            <nav className = 'navbar'>
                <ul className='portfolio-header-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Tech Stack</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header