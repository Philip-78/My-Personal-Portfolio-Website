import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <h3>Career skills & other interests</h3>
            <div className="skills-content">
                <div className="tech-skills">
                    <h3>Tech</h3>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Front-End Development</li>
                        <li>Back-End Development with NestJs</li>
                    </ul>
                </div>
                <div className="other-skills">
                    <h3>Also I Like <span>Sports</span></h3>
                    <ul>
                        <li>Football</li>
                        <li>Bodybuilding</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
