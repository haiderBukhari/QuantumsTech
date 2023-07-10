import React from 'react'
import './animated.css'
export const Timeline = () => {
    return (
        <div className="main main-s">
            <ul className='ul-list'>
                <li className='ul-list-1'>
                    <i className="icon uil uil-capture"></i>
                    <div className="progress one">
                        <p>1</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Place Order on Fiverr</p>
                </li>
                <li>
                    <i className="icon uil uil-clipboard-notes"></i>
                    <div className="progress two">
                        <p>2</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Fill Details</p>
                </li>
                <li>
                    <i className="icon uil uil-credit-card"></i>
                    <div className="progress three">
                        <p>3</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Make Payment</p>
                </li>
                <li>
                    <i className="icon uil uil-exchange"></i>
                    <div className="progress four">
                        <p>4</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Order in Progress</p>
                </li>
                <li>
                    <i className="icon uil uil-map-marker"></i>
                    <div className="progress five">
                        <p>5</p>
                        <i className="uil uil-check"></i>
                    </div>
                    <p className="text">Perfect delivery</p>
                </li>
            </ul>

        </div>
    )
}