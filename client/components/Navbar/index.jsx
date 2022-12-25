import React from "react";
import style from "../../styles/navbar.scss"

function Index () {

    return (
        <div className="navbar">
            <div className="navbarStuff">
                <div>
                    <ul>
                        <li>
                            <h1>Louis Portfolio</h1>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/louiscowan" target="_blank">
                        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="github logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Index