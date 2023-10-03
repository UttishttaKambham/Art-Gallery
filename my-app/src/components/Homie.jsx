import pic1 from "../visuals/1.jpg"
import pic2 from "../visuals/2.jpg"
import pic3 from "../visuals/3.jpg"
import pic4 from "../visuals/4.jpg"
import pic5 from "../visuals/5.jpg"
import pic6 from "../visuals/6.jpg"
import pic7 from "../visuals/7.jpg"
import pic8 from "../visuals/8.jpg"
import HomieData from "./HomieData"
import "./HomieStyles.css"


const Homie =() => {
    return(
<div className="Homie">
    <h1>Trending Arts</h1>
    <p> Let's begin our art life</p>
   <HomieData
   className="first-des"
   heading="Vincent van Gogh, The Starry Night, 1889"
   text="Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889. Indeed, The Starry Night seems to reflect his turbulent state of mind at the time, as the night sky comes alive with swirls and orbs of frenetically applied brush marks springing from the yin and yang of his personal demons and awe of nature."
   img1={pic1}
   img2={pic2}
   
   />


   <HomieData
    className="first-des-reverse"
   heading="Hieronymus Bosch, The Garden of Earthly Delights, 1503–1515"
   text="This fantastical triptych is generally considered a distant forerunner to Surrealism. In truth, it’s the expression of a late medieval artist who believed that God and the Devil, Heaven and Hell were real. Of the three scenes depicted, the left panel shows Christ presenting Eve to Adam, while the right one features the depredations of Hell; less clear is whether the center panel depicts Heaven. In Bosch’s perfervid vision of Hell, an enormous set of ears wielding a phallic knife attacks the damned, while a bird-beaked bug king with a chamber pot for a crown sits on its throne, devouring the doomed before promptly defecating them out again. This riot of symbolism has been largely impervious to interpretation, which may account for its widespread appeal."
   img1={pic3}
   img2={pic4}
   
   />

<HomieData
   className="first-des"
   heading="Pieter Bruegel the Elder, The Harvesters, 1565"
   text="Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons. The time is probably early September. A group of peasants on the left cut and bundle ripened wheat, while the on the right, another group takes their midday meal. One figure is sacked out under a tree with his pants unbuttoned. This attention to detail continues throughout the painting as a procession of ever-granular observations receding into space. It was extraordinary for a time when landscapes served mostly as backdrops for religious paintings."
   img1={pic5}
   img2={pic6}
   
   />

<HomieData
   className="first-des-reverse"
   heading="Georges Seurat, A Sunday Afternoon on the Island of La Grande Jatte, 1884–1886"
   text="Georges Seurat’s masterpiece, evoking the Paris of La Belle Epoque, is actually depicting a working-class suburban scene well outside the city’s center. Seurat often made this milieu his subject, which differed from the bourgeois portrayals of his Impressionist contemporaries. Seurat abjured the capture-the-moment approach of Manet, Monet and Degas, going instead for the sense of timeless permanence found in Greek sculpture. And that is exactly what you get in this frieze-like processional of figures whose stillness is in keeping with Seurat’s aim of creating a classical landscape in modern form."
   img1={pic7}
   img2={pic8}
   
   />



</div>
    )
}
export default Homie;