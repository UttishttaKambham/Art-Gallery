import "./ActivityStyles.css"
import ActivityData from "./ActivityData";
import Activity1 from "../visuals/A.jpg"
import Activity2 from "../visuals/B.jpg"
import Activity3 from "../visuals/C.jpg"
function Activity(){
    return(
        <div className="Activity">
            <h1>Famous Arts</h1>
            <p>Gain detailed knowledge of some great arts</p>

            <div className="ActivityCard">
                <ActivityData
                image={Activity1}
                heading="THE TOWER OF BABEL BY PIETER BRUEGEL THE ELDER"
                text="Pieter Bruegel the Elder has created as many as three famous art pieces based on a popular biblical storyline. According to the artist's vision, it is not language barriers that are to blame for the failure that befell the construction, but mistakes and poor-quality building materials. At first glance, the huge structure seems strong enough, but upon closer inspection, the secret of the painting is revealed. You can see this artwork in the Kunsthistorisches Museum in Vienna."
                />

                <ActivityData
                image={Activity2}
                heading="LAS MENINAS BY DIEGO VELÁZQUEZ"
                text="Diego Velazquez's most famous painting, Las Meninas, depicts five-year-old Infanta Margarita in front of a portrait of her parents. The picture includes several plans: the characters pose for the painter, are reflected in the mirror, and leave the room. Such a composition expands the dimensions of the canvas, making it three-dimensional. This masterpiece, now housed in Museo del Prado in Madrid, is considered the highest achievement of Velazquez himself. Sir Thomas Lawrence, President of the Royal Academy of Arts, called it the true philosophy of art."
                />
                <ActivityData
                image={Activity3}
                heading="The Night Watch"
                text="The true name of this painting by Rembrandt is The Shooting Company of Frans Banning Cocq and Willem van Ruytenburch. In the 19th century, art critics who discovered the painting thought that human figures were standing against a dark background, and it was called The Night Watch. Later it was discovered that a layer of soot made the painting dark, though the action actually takes place during the day. However, the painting replenished the treasury of famous art pieces under the name The Night Watch. The painting is kept in the Rijksmuseum in Amsterdam."
                />

            </div>
        </div>
    )
}

export default Activity;