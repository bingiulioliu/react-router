
import styles from "./ReactRouter.module.css";

function Homepage() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Fake Store</h1>
        </div>
    );
}
export default Homepage;
