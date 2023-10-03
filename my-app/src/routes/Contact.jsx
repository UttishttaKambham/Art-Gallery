import House from "../components/House";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
function Contact(){
    return(
        <>
         <Navbar/>
    <House  
    cName="House-con"
    houseImg="https://wallpapercave.com/wp/MOyrUQC.jpg"
    title="Contact"
    btn="hide"
    />
    <ContactUs/>
    <Footer/>
        </>
    )
    }
    export default Contact;