import House from "../components/House";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sign from "../components/Sign";

function SignUp(){
  return(
    <>
    <Navbar/>
    <House  
    cName="House-con"
    houseImg="https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg"
    title="SignUp"
    btn="hide"
    />
    <Sign/>
    <Footer/>
    
    </>
  )
}

export default SignUp;

