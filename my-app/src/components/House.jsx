import "./HouseStyles.css"
function House(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="image" src={props.houseImg}/>

            <div className="Housetxt">
                <h1>{props.title}</h1>
                <p>{props.caption}</p>
                <a href={props.url}
                className={props.btn}>{props.btntxt}</a>
            </div>
        </div>
        </>
    );
    }
    export default House;