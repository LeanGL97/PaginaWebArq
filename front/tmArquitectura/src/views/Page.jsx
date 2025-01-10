import AboutUs from "../components/aboutUs/AboutUs";
import Carrousell from "../components/carrousell/Carrousell";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";
import NavBar from "../components/navBar/NavBar";
import Services from "../components/services/Services";
import styles from "./page.module.css"

const Page = () =>{
    return (
        <>
        <div className={styles.text}>
        <Logo/>
        <NavBar/>
        <Carrousell/>
        <AboutUs/>
        <Services/>
        <ContactUs/>
        <Footer/>
        </div>
        </>
    )
}

export default Page;