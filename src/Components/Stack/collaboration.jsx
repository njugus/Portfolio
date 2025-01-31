import { collaborationTools } from "../../Utils/stack";
const Collaboration = () => {
    return (
        collaborationTools.map(item => {
            return(
            <div className="collaboration-section">
                <figure>
                    <img src = {item.imageURL} alt = "collaboration tool" />
                </figure>
                <h2>{item.description}</h2>
            </div>)
        })
    )
}

export default Collaboration;