import './Deamand.css'
import clients from '../assets/all-pic/clients.jpg'
export const Demand = () => {
  return (
    <div className='demand-sec'>
    <div className='main-demand'>
        <div className="sub-demand">
            <div className="left-p">
                <h3>OUR CLIENTS</h3>
                <h1>We are trusted by our clients worldwide.</h1>
            </div>
            <p className='qualified'>Quantumstech is a trusted platform that connects clients worldwide with skilled professionals who provide quality results. Our community of satisfied clients continues to grow, and we invite you to join us today and experience the benefits of working with Quantumstech.</p>
        </div>
    </div>
      <img className='apply-sizez' src={clients} alt="" />
    </div>
  )
}