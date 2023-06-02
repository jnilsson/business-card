import React from "react";
import profile from "../img/profile.png"

export default function Info() {
    return (
        <div className="info">
            <img className="info--picture" src={profile} alt="profile pciture"></img>
            <h1 className="info--name">Johannes Nilsson</h1>
            <h2 className="info--title">Frontend Entwickler</h2>
            <a className="info--link" href="https://jnilsson.de" target="_blank" rel="noreferrer">jnilsson.de</a>
            <div className="info--button--container">
                <button className="info--button info--button--mail">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:johannes@jnilsson.de">Email</a>
                </button>
                <button className="info--button info--button--xing">
                    <i class="fab fa-xing"></i>
                    <a href="https://www.xing.com/profile/Johannes_Nilsson3/cv" target="_blank" rel="noreferrer">Xing</a>
                </button>
            </div>
        </div>
    )
}