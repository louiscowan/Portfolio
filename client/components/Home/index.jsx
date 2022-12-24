import Navbar from '../Navbar/index.jsx'

import React from "react";
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
                <div>
                    <a href="https://at-what-cost.devacademy.nz">
                        <Project h2={'Financial Spending Tracker'} p={'This is my final group project from Dev Academy. This app allows you to upload a csv file and look at what you have spent your money on. You are also able to put filters on different purchases to be able to see a graph breakdown of your spending habbits. Login and your filters will be saved.'}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default index