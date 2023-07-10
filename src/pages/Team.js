import '../style.css'
import pic1 from './img/best pic.jpg'
import pic2 from './img/team1.jpg'
import pic3 from './img/team2.jpg'
import pic4 from './img/team3.jpg'
import pic5 from './img/ayaz-oic1.jpg'
export const Team = () => {
  return (
    <section id="team">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
                <h6 class="text-primary">TEAM</h6>
                <h1>Meet Our Crew Members</h1>
                <p>Welcome to Quantumstech's Crew Members page! Get to know the talented individuals who make up our team and help make our freelancing platform a success. Our crew members are experts in their respective fields and are dedicated to providing top-quality services to our clients. From web development to content creation, we've got you covered.</p>
            </div>
        </div>
        <div class="row text-center g-4 apply-flex">
        <div className="col-lg-3 col-sm-6 ">
                <div class="team-member card-effect">
                    <img src={pic5} alt=""/>
                    <h5 class="mb-0 mt-4">Ayaz Hussain</h5>
                    <p>Data Analyst and Machine Learning Expert</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="team-member card-effect">
                    <img src={pic1} alt=""/>
                    <h5 class="mb-0 mt-4">Haider Bukhari</h5>
                    <p>Web Designer and Developer</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="team-member card-effect">
                    <img src={pic2} alt=""/>
                    <h5 class="mb-0 mt-4">Salman Ahmed</h5>
                    <p>Graphics and Logo Designer</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="team-member card-effect">
                    <img src={pic3} alt=""/>
                    <h5 class="mb-0 mt-4">Hamraz Ahmed</h5>
                    <p>SEO and Web Optimization Expert</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}