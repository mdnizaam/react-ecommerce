import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-md-8 ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 text-white d-flex justify-content-center ">

                                    <p style={{ fontSize: "20px", text: "inline" }} className="my-3">E-Commerce</p>


                                </div>
                                <div className="col-md-8 ">
                                    <form className="d-flex justify-content-center my-3">
                                        <input className="form-control me-2" type="text" placeholder="Search For Products And More" />

                                        <button className="btn  bg-white" type="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg></span></button>
                                    </form>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-4 ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="btn my-3 bg-white">Login</div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="btn btn-primary my-3 me-3">More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                    </svg></span></div>
                                    <div className="btn btn-primary my-3 "><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg></span> Cart</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar
