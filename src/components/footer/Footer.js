import React from 'react';
import "./Footer.css";
const Footer = (props) => {
   if(props.lang === "en"){ 
    return (
        <footer className="footer" id="contact">
            <div className="footer-info">
                <div>
                    <h1>Ignacio Aranda</h1>
                    <div className="country">
                        <p>Tucumán, Argentina</p>
                    
                        <i class="fas fa-globe-americas globo"></i>
                    </div>
                </div>
                 <div className="contactContainer">
                    <h5>CONTACT</h5>
                    <form>
                        <input className="text-input" placeholder=" Name" type="text" id="name" autoComplete="off"/>
                        <input className="text-input" placeholder=" Email" type="email" id="email" autoComplete="off"/>
                        <textarea className="inputMess" placeholder=" Message"></textarea>
                        <button className="inputBot" type="submit">SEND</button>
                    </form>
                </div>
                
                
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Created with ReactJs   
                </div>
                <div className="sns-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="mailto:nacho@gmail.com" target="_blank" rel="noreferrer">
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
    )}
    else{
        return (
            <footer className="footer" id="contact">
                <div className="footer-info">
                <div>
                    <h1>Ignacio Aranda</h1>
                    <div className="country">
                        <p>Tucumán, Argentina</p>
                    
                        <i class="fas fa-globe-americas globo"></i>
                    </div>
                </div>
                 <div className="contactContainer">
                    <h5>CONTACTO</h5>
                    <form>
                        <input className="text-input" placeholder=" Nombre" type="text" id="name" autoComplete="off"/>
                        <input className="text-input" placeholder=" Email" type="email" id="email" autoComplete="off"/>
                        <textarea className="inputMess" placeholder=" Mensaje"></textarea>
                        <button className="inputBot" type="submit">ENVIAR</button>
                    </form>
                </div>
                    
                    
                </div>
                <div className="footer-sns">
                    <div className="design-by">
                        Creado con ReactJs   
                    </div>
                    <div className="sns-links">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin linkedin"></i>
                        </a>
                        <a href="mailto:nacho@gmail.com" target="_blank" rel="noreferrer">
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
}

export default Footer
