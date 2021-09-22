import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Ignacio Aranda</h1>
                <div className="country">
                    <p>Tucumán, Argentina</p>
                
                    <i class="fas fa-globe-americas globo"></i>
                </div>
                
                
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>and let´s get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Designed by Myself    
                </div>
                <div className="sns-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://gmail.com" target="_blank" rel="noreferrer">
                        <i className="far fa-envelope email"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer