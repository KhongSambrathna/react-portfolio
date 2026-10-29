import React from "react";
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://id.brathna.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://id.brathna.com/" target="_blank" rel="noreferrer"><h2>Football ID Verify</h2></a>
                <p>Countryside Football ID Verify records, verifies, and cards every player and staff member in your program — each ID carries a QR code that opens straight to a live verification record, so officials and organizers can confirm identity in seconds.</p>
            </div>
            <div className="project">
                <a href="https://news.brathna.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://news.brathna.com/" target="_blank" rel="noreferrer"><h2>Local Football News</h2></a>
                <p>Developed a dynamic news and updates platform dedicated to local football tournaments, match results, and community sports highlights in Siem Reap, keeping fans and players connected.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Tournament Manager</h2></a>
                <p>A web-based sports management platform designed to automate tournament scheduling, bracket generation, team registrations, and real-time match scoring for local football leagues.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;