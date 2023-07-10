import img from '../assets/all-pic/img-s1.png'
import './section.css'
export const Section = () => {
  let data = [
    'Highlight Your Skills',
    'Expand Your Network',
    'Create Your Portfolio'
  ]
  return (
    <div className="sec pt-3" id='join'>
        <img className='img-s' src={img} alt="" srcset="" />
      <div className="left-portion">
        <p className="dif">Discover What Makes Quantumstech Stand Out from the Crowd?</p>
        <h2 className="h3">Completely free to join!</h2>
        <p className='p'>At Quantumstech, we're dedicated to helping you achieve your career goals. Join us today to hire top freelancers and take the first step towards success.</p>
        {
          data.map((arr)=>(
            <div className="portion">
              <i className="fa-regular fa-circle-check"></i>
              <p className="arr">{arr}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
