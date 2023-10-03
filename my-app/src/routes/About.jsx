import House from "../components/House";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Activity from "../components/Activity";
import AboutUs from "../components/AboutUs";
function About(){
return(
    <>
    <Navbar/>
    <House  
    cName="House-abt"
    houseImg="https://static.perrotin.com/exhibition/10668_v_1693459337.jpg"
    title="OUR STORY"
    btn="hide"
    />
    <AboutUs/>
    <Activity/>
    <Footer/>
    </>
)
}
export default About;