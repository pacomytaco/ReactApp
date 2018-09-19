import React, {Component} from "react";
import "./header.css";

class Header extends Component {
    render () {
        return (
            <div className="header">
            <h1>Gorillaz Clicky Game</h1>
            <p>Click on all the images, without clicking the same one more than once, to win!</p>
        </div>
        )
    }
}
// const Header = props => (
//     <div className="header">
//         <div className="title">{props.children}</div>

//         <div className="scores">
//         Score: {props.score} HighScore: {props.highscore}
//         </div>
//     </div>
// );

export default Header;