import { databases } from "../../Utils/stack";
const Databases = () => {
    return (
        databases.map(item => {
            return(
            <div className="databases-section">
                <figure>
                    <img src = {item.imageURL} alt = "database tool" />
                </figure>
                <h2>{item.description}</h2>
            </div>)
        })
    )
}

export default Databases;