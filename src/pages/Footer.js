import '../style.css'
import signature from '../assets/my_signature_cocosign (1).png'
export const Footer = () => {
  return (
    <footer>
    <div className="footer-top">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4 conta">
                    <img className="logo " src={signature} alt=""/>
                </div>
                <div className="col-lg-2 conta">
                    <h5 className="text-white">Brand</h5>
                    <ul className="list-unstyled">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 conta">
                    <h5 className="text-white">More</h5>
                    <ul className="list-unstyled">
                        <li><a href="#portfolio">Portfolios</a></li>
                        <li><a href="#join">Join us</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#">Order</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 conta">
                    <h5 className="text-white">Contact</h5>
                    <ul className="list-unstyled">
                        <li>Email: contact@quantumstech.com</li>
                        <li>Phone: (0092) 310 510 9663</li>
                        <li>Whatsapp: +92 310 510 9663</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center-1">
                    <p className="mb-0 conta">QuantumsTech © 2023 Copyright all right reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}