import Navbar from '../Navbar/index.jsx'

import React, {useState} from "react";
import { Link } from 'react-router-dom'

import Project from "./Project";

function index () {

    return (
        <>
        <Navbar />
            <div className="project-links">
                <div>
                    <Link style={{textDecoration: 'none'}} to="file-selector">
                        <Project h2={'File Selector'} p={'Random file selector thing. No purpose, just code challenge.'}/>
                    </Link>
                </div>
                <div>
                    <a href="https://pokemon-finder.devacademy.nz">
                        <Project h2={'Pokemon Finder'} p={'Search up your facourite Pokemon, look at the Pokemon\'s stats, and add them to the data base'}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default index