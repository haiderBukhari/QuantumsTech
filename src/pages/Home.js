import '../style.css'
import React from 'react'

export const Home = () => {
  return (
    <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="display-4 text-white">Expert Team for Your Business Needs</h1>
                    <p class="text-white my-3">From marketing and design to development and strategy, our team has the skills and experience to bring your business to the next level. Let us help you achieve your goals.</p>
                    <a href="#" class="btn me-2 btn-primary">Hire a Freelancer</a>
                    <a href="#portfolio" class="btn btn-outline-light portfolio-small">Check our Projects</a>
                </div>
            </div>
        </div>
    </div>
  )
}
