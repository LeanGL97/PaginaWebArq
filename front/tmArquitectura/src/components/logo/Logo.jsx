import styles from "./logo.module.css"

const Logo = () => {
    return (
        <>
        <div>
            <img src="/assets/logo.png" className={styles.logo} alt="Logo" />
        </div>
        </>
    )
};

export default Logo;