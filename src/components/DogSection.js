import React from 'react';
import {Button} from "./Button";
import "./DogSection.css"
import "../App.css";

function DogSection() {
    return (
        <div className="dog-container" >
            <video src="/videos/navi3.mp4" autoPlay loop muted />
            <h1>WE GOT SOME FLOOFY DOGGOS</h1>
            <p>Want to schedule a doggy playdate?</p>
            <div className="dog-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">COME PLAY!</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Check this out! <i className="far fa-play-circle" /> </Button>
            </div>
        </div>
    )
}

export default DogSection