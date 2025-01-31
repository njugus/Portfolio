import './stack.css'
import Collaboration from './collaboration';
import Databases from './databases';
import Languages from './languages';
import Tools from './Tools';
const Stacks = () => {
    return (
        <>
        <h1 className = "main-heading">Tech Stack</h1>
        <section className="all-stacks-section">
            <Languages />
            <Databases />
            <Tools />
            <Collaboration/>
        </section>
        </>
    )
}

export default Stacks;