import React from 'react';
import profilePic from '../../images/IMG_7804.png';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content">
                <img src={profilePic} alt="Philip Idiare Oghenerukevwe" className="profile-pic" />
                <div className="header-text">
                    <h1>Philip Idiare Oghenerukevwe</h1>
                    <h2>Student of Innopolis University, Innopolis, Russia.</h2>
                    <div className="social-icons">
                        <a id="gh-link" href="https://github.com/Philip-78" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a id="tg-link" href="https://t.me/philip_i" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                        <a id="email" href="mailto:p.idiare@innopolis.university">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
