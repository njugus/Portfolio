import './about.css'
import image from '../../assets/graduation.jpg'
const About = () => {
    return(
        <>
        <section className = "about-section">
            <div className = 'image-div'>
                <img src={image} alt='FullStack graduation image'/>
            </div>
            <div className='description'>
                <div className='description-heading'>
                    <h3 className='top-heading'>Discover</h3>
                    <h1>About Me</h1>
                </div>
                <div className = "description-text">
                    <p>I am Kelvin Njuguna, a full-stack web developer and self-taught Python programmer based in Murang'a, Kenya. With over two years of experience in software development, 
                        I have honed the skills necessary to build dynamic websites and robust web applications.
                        Passionate and dedicated to my craft, I thrive on continuous learning and tackling new challenges. 
                        As a man of few words, I prefer to let my work speak for itself.</p>
                </div>
                <div className = "description-credentials">
                    <ul className ="left-list">
                        <li>Name : Kelvin Njuguna</li>
                        <li>Phone : 0110080435</li>
                        <li>Expirience : 2+ years</li>
                        <li>Linkedln : <a href="https://www.linkedin.com/in/kelvin-njuguna-1a7227310/">My Linkedln Link</a></li>
                    </ul>
                    <ul className="right-list">
                        <li>Age : 22</li>
                        <li>Address : 841 Limuru</li>
                        <li>Email : kevinnjugush95@gmail.com</li>
                        <li>Github : <a href="https://github.com/njugus">My Github Link</a></li>
                    </ul>
                </div>
                <br/>
                <div className ="CTA-link">
                    <a href=''>Download CV</a> 
                </div>
            </div>
        </section>
        </>
    )
}

export default About