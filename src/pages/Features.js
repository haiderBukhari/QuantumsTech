import '../style.css'
import React from 'react'

export const Features = () => {
    return (
        <section class="row w-100 py-0 bg-light" id="features">
            <div class="col-lg-6 col-img"></div>
            <div class="col-lg-6 py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <h6 class="text-primary">WHY TO CHOOES US</h6>
                            <h1>Best solution for your Ideas</h1>
                            <p>At our company, we understand that your ideas are your most valuable asset. That's why we offer the best solutions to help you turn your ideas into reality. Our team of experts has the skills and experience to bring your ideas to life, from concept to completion. We offer personalized support and innovative solutions to ensure that your vision is fully realized. Partner with us and experience the difference of working with a team that is dedicated to making your ideas a reality.</p>

                            <div class="feature d-flex mt-5">
                                <div class="iconbox me-3">
                                    <i class='bx bxs-comment-edit'></i>
                                </div>
                                <div>
                                    <h5>Collaborative Approachs</h5>
                                    <p>We work closely with you to understand your needs and provide tailored solutions that meet your unique requirements.</p>
                                </div>
                            </div>
                            <div class="feature d-flex">
                                <div class="iconbox me-3">
                                    <i class='bx bxs-user-circle'></i>
                                </div>
                                <div>
                                    <h5>Creative Thinking</h5>
                                    <p>Our team brings fresh perspectives and creative thinking to every project, helping you uncover new opportunities and possibilities.</p>
                                </div>
                            </div>
                            <div class="feature d-flex">
                                <div class="iconbox me-3">
                                    <i class='bx bxs-download'></i>
                                </div>
                                <div>
                                    <h5>Result-Oriented</h5>
                                    <p>We are committed to delivering results that exceed your expectations and helping you achieve your goals. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}