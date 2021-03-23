import React from 'react'

function Section1() {
    return (
        <div>
            <nav className="navbar navbar-default  navbar-expand-md navbar-light bg-light col-sm-12 col-md-12">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                     <img className="nav-brand" src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="" width="30" height="24"/>
                     </a>
                    <form className="d-flex mr-auto" >
                        <input className="search-bar" type="search" placeholder="Search for Category,Brand or Product" aria-label="Search"/>
                    </form>
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="/Name">Stores & Preschools </a>
                        <a className="nav-link" href="/"> Support  </a>
                        <a className="nav-link" href="/"> Track Order  </a>
                        <a className="nav-link" href="/">  Firstcry Parenting  </a>
                        <a className="nav-link" href="/"> Login / Register  </a>
                        <a className="nav-link" href="/"> <i class="far fa-heart"></i> Shortlist </a>
                        <a className="nav-link active" href="/" > <i class=" cart fas fa-shopping-cart"></i>  Cart</a>
                     </div>
                 </div>
            </nav>
        </div>
    )
}

export default Section1
