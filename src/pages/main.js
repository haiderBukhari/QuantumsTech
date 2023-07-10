import Laptop from '../assets/main-lap1.png'
import Freelance from '../assets/all-pic/3714960.jpg'
import './main.css'
export const Main = () => {
    let data = [
        'The best for every budget',
        'Quality work done quickly',
        'Protected payments, every time'
    ]
    let para = [
        'Find high-quality services at every price point. No hourly rates, just project-based pricing.',
        'Find the right freelancer to begin working on your project within minutes.',
        "Always know what you'll pay upfront. Your payment isn't released until you approve the work."
    ]

    return (
        <section className="main main-dd">
            <div className="sub-sec">
                <div className="left">
                    <h1 className="h1 paltform">Platform connecting ideas and businesses with freelancers.</h1>
                    {
                        data.map((arr, index)=>(
                            <>
                                <div className="first">
                                    <div className="alpha">
                                        <i class="fa-regular fa-circle-check"></i>
                                        <h2>{arr}</h2>
                                    </div>
                                    <p className="paragraph">{para[index]}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="right">
                    <img className='img' src={Freelance} alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}