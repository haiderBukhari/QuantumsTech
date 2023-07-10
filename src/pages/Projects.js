import '../style.css'
import img1 from './img/ng-1.png'
import img2 from './img/ng-2.png'
import img3 from './img/ng-3.png'
import img4 from './img/ng-4.png'
import img5 from './img/ng-5.png'
import img6 from './img/ng-6.png'
import React from 'react'

export const Projects = () => {
    return (
        <section id="portfolio">
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-md-8 mx-auto text-center">
                        <h6 class="text-primary">PROJECTS</h6>
                        <h1>Our Recent Work</h1>
                        <p>Our team has expertise in web and mobile application development, AI, cybersecurity, cloud computing, blockchain, data science, statistical modeling, and SEO copywriting. We've developed secure and compliant websites, mobile apps, and scalable solutions for clients, while providing valuable insights through statistical modeling and data science, and improving their online presence with our SEO copywriting expertise.</p>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img2} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">Website Design and Development</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img1} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">E commerce Application Development</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img3} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">Graphic Designing</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img4} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">SEO and Web Optimization</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img5} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">AI and Data Analysis</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="project">
                            <img src={img6} alt=""/>
                                <div class="overlay">
                                    <div>
                                        <h4 class="text-white">Project Title</h4>
                                        <h6 class="text-white">Wordpress</h6>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}