import React from 'react';

function Contact() {
  return (
    <div className="container">
        <div className="row">
            <div className="contact">
                <h2>Contact</h2>
            </div>
            <div className="contact-media">
                <div className='info-media'>
                    <span className='big'>Email</span>
                    <span className='small'>mohamedghiouan@gmail.com</span>
                </div>
                <div className='info-media'>
                    <span className='big'>Social Medias</span>
                    <div>
                        <a href='https://www.instagram.com/zepher_yx/' className='small' target="_blank" rel="noreferrer">
                          <i className="bi bi-arrow-up-right"></i>Instagram
                          <div className="link-underline"></div>
                        </a>
                        <a href='https://www.linkedin.com/in/mohamed-ghiouan/' className='small' target="_blank" rel="noreferrer">
                          <i className="bi bi-arrow-up-right"></i>LinkedIn
                          <div className="link-underline"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Contact;
