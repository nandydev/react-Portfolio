import "./HeroImg2Style.css";
import React, {Component} from 'react'
// import React from 'react'

// const HeroImg2 = () => {
//   return (
//     <div className="hero-img">
//         <div className="headings">
//             <h1>{this.props.heading}</h1>
//             <p>This is my Paragraph</p>
//         </div>
//     </div>
//   )
// }

//use props and class
class HeroImg2 extends Component {
    render(){
        return (
            <div className="hero-img">
                <div className="headings">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
 
}

export default HeroImg2