import "./ActivityStyles.css";

function ActivityData(props){
    return(
    <div className="A-card">
        <div className="A-img">
            <img src={props.image} alt="image"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
    );
}

export default ActivityData;