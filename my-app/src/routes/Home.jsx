import { useNavigate } from "react-router-dom";
import Activity from "../components/Activity";
import Footer from "../components/Footer";
import Homie from "../components/Homie";
import House from "../components/House";
import Navbar from "../components/Navbar";
function Home(){
    const navigate=useNavigate();
    const handleArtGalleryButtonClick = () => {
        navigate('/arts')
      };
return(
    <>
    <Navbar/>
    <House  
    cName="house"
    houseImg="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    title="Life is an Art"
    caption="-embracing art's magic!"
    btntxt="Art Gallery"
    url="/arts"
    btn="show"
    onClick={handleArtGalleryButtonClick}/>
    <Homie/>
    <Activity/>
    <Footer/>
    </>
)
}
export default Home;