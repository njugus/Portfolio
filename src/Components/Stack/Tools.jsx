import { frameworksAndLibraries } from "../../Utils/stack";
const Tools = () => {
    return (
       frameworksAndLibraries.map(item => {
            return(
            <div className="tools-section">
                <figure>
                    <img src = {item.imageURL} alt = "frameworks" />
                </figure>
                <h2>{item.description}</h2>
            </div>)
        })
    )
}

export default Tools;