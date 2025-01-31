import { languages } from "../../Utils/stack";
import './stack.css'
const Languages = () => {
    return (
        languages.map(item => {
            return(
                <div className = "languages-section">
                <figure>
                    <img src = {item.imageURL} alt = "programming languages" />
                </figure>
                <h2>{item.description}</h2>
                </div>
                )
        })
    )
}

export default Languages;