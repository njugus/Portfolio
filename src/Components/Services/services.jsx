import './services.css'
import Service from './service'
const Services = () => {
    return (
        <>
        <section className = "services-section">
        <div className = "services-header">
            <h3>What i do</h3>
            <h1>My Services</h1>
        </div>
        <div className="services-offered">
            <Service/>
        </div>
        </section>
        </>
    )
}

export default Services