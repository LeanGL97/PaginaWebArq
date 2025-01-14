import AboutUs from "../components/aboutUs/AboutUs";
import Carrousel from "../components/carrousel/Carrousel";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/services/Services";
import styles from "./page.module.css"
import Recognitions from "../components/recognitions/Recognitions"
const Page = () => {
    return (
        <>
            <div className={styles.text}>
                <NavBar />
                <Carrousel />
                <AboutUs />
                < Recognitions />
                <Services />
                {/*<ContactUs />
                <Footer /> */}
            </div>
        </>
    )
}

export default Page;