import React from 'react'

function Section9() {
    return (
        <div id="sec9">
        <h2 style={{textAlign:'center',fontWeight:'lighter',color:'orange',fontFamily:'Della Respira'}}>big store for Little ones</h2>
            <div className="row" id="footer-icons">
                <div className="col-lg-2 col-md-2">
                    <a href="/">
                        <i class="fas fa-horse fa-2x"></i>
                        <p>2Lakhs+ Unique Products</p>
                    </a>
                </div>
                <div className="col-lg-2 col-md-2">
                    <a href="/">
                        <i class="fas fa-star fa-2x"></i>
                        <p>5800 Brands</p>
                    </a>
                </div>
                <div className="col-lg-2 col-md-2"> 
                    <a href="/">
                        <i class="fas fa-users fa-2x"></i>
                        <p>7.5M Registered users</p>
                    </a>
                </div>
                <div className="col-lg-2 col-md-2">
                    <a href="/">
                        <i class="fas fa-exchange-alt fa-2x"></i>
                        <p>Easy Return Policy</p>
                    </a>
                </div>
                <div className="col-lg-2 col-md-2">
                    <a href="/">
                        <i class="fas fa-truck fa-2x"></i>
                        <p>Free Shipping available above Rs.699*</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section9
