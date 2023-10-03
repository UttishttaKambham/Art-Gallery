import { Component } from "react";
import pic1 from "../visuals/1.jpg"
import pic2 from "../visuals/2.jpg"
import pic3 from "../visuals/3.jpg"
import pic4 from "../visuals/4.jpg"
import "./HomieStyles.css";
class HomieData extends Component{
    render(){
        return(
         
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}
        
        </p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        );
    }
}

export default HomieData;