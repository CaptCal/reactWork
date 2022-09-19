import React from "react";

const currentYear = new Date().getFullYear();
function Footer(){
    return(
        <div className="footer">
            <div className="footer_icons">
            <div className="icon"><i className="fa-brands fa-facebook"></i></div>
            <div className="icon"><i className="fa-brands fa-whatsapp"></i></div>
            <div className="icon"><i className="fa-brands fa-twitter"></i></div>
            </div>
            <p className="copyright">copy right  <i className="fa-solid fa-copyright"></i>{" " + currentYear}</p>
        </div>
    )
}
export default Footer;