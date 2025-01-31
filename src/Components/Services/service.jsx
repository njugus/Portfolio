import myServices from "../../Utils/services";
import './services.css'

const Service = () => {
    return (
        myServices.map(item => { return(
            <div className = "service">
                <h2 className = "service-title">{item.title}</h2>
                <p className = "service-description">{item.description}</p>
            </div>)
        })
    )
}

export default Service;