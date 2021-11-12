import React from 'react';
import "./Footer.css";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
const Footer = (props) => {
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6fosh4l', 'template_5cmsf4e', e.target, 'user_2fMVd00rgXqn0qOePndGa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          Swal.fire({
            icon: 'success',
            title: 'I will contact you as soon as possible!',
            showConfirmButton: false,
            timer: 3200
          })
      };
   
   
    if(props.lang === "en"){ 
    return (
        <footer className="footer" >
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
                    <form onSubmit={sendEmail} id="contact">
                        <input className="text-input" placeholder=" Name" type="text" name="name" />
                        <input className="text-input" placeholder=" Email" type="email" name="mail" />
                        <textarea className="inputMess" placeholder=" Message" name="message" id="message"></textarea>
                        <button className="inputBot" type="submit">SEND</button>
                    </form>
                </div>
                
                
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Created with ReactJs   
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/ignacio-aranda-977632225/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="mailto:ignacioarcontact@gmail.com" target="_blank" rel="noreferrer">
                        <i className="far fa-envelope email"></i>
                    </a>
                    <a href="https://www.instagram.com/nacho.aranda02/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://wa.me/543815953378" target="_blank" rel="noreferrer">
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
                    <form onSubmit={sendEmail}>
                        <input className="text-input" placeholder=" Nombre" type="text" name="name" autoComplete="off"/>
                        <input className="text-input" placeholder=" Email" type="email" name="email" autoComplete="off"/>
                        <textarea className="inputMess" placeholder=" Mensaje" name="message"></textarea>
                        <button className="inputBot" type="submit">ENVIAR</button>
                    </form>
                </div>
                    
                    
                </div>
                <div className="footer-sns">
                    <div className="design-by">
                        Creado con ReactJs   
                    </div>
                    <div className="sns-links">
                        <a href="https://www.linkedin.com/in/ignacio-aranda-977632225/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin linkedin"></i>
                        </a>
                        <a href="mailto:ignacioarcontact@gmail.com" target="_blank" rel="noreferrer">
                            <i className="far fa-envelope email"></i>
                        </a>
                        <a href="https://www.instagram.com/nacho.aranda02/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram instagram"></i>
                        </a>
                        <a href="https://wa.me/543815953378" target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp whatsapp"></i>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
