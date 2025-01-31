import './hero.css'
import image from  '../../assets/MyPic.jpg'
const Hero = () => {
    return (
        <>
        <section className='hero-section'>
            <div className = 'overlay'>
                <figure className='image-figure'>
                <img src = {image} alt='graduation image' className='profile-image'/>
                </figure>
                <section className = "description">
                    <h1 className='heading-name'>Kelvin Njuguna </h1>
                    <p>A Full Stack Web Developer</p>
                </section>
            </div>
        </section>
        </>
    )
}

export default Hero