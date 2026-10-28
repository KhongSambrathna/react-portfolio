import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faRunning } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const webDevSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub",
    "REST API"
];

const graphicDesignSkills = [
    "Adobe Photoshop",
    "Logo & Branding",
    "Poster Design",
    "Banner Design",
];

const peAndRefereeSkills = [
    "Sports Rules & Regulations",
    "Match Officiating",
    "Refereeing",
    "Physical Education Teacher",
    "Sports Coaching",
    "Team Leadership",
    "Event Management"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Skill 1: Full Stack Web Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Full Stack Web Development</h3>
                        <p>
                            I have built a diverse array of web applications from scratch using modern frontend and backend technologies, ensuring seamless end-to-end functionality and responsive design.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {webDevSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Skill 2: Graphic Design */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPalette} size="3x"/>
                        <h3>Graphic Design</h3>
                        <p>
                            I specialize in creative visual design, including branding, UI/UX layouts, promotional banners, and marketing materials that effectively engage target audiences.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Skills:</span>
                            {graphicDesignSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Skill 3: Physical Education & Referee */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faRunning} size="3x"/>
                        <h3>Physical Education & Referee</h3>
                        <p>
                            I have professional expertise in sports coaching, fitness training, and official match refereeing, maintaining fairness, discipline, and strong leadership under pressure.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {peAndRefereeSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;