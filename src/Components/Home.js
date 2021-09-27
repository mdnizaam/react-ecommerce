import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Offer from "./Images/Capture.PNG"
import Grocery from "./Images/Capture2.PNG"
import Mobile from "./Images/Capture3.PNG"
import Fashion from "./Images/Capture4.PNG"
import Electronic from "./Images/Capture7.PNG"
import Home1 from "./Images/Capture5.PNG"
import Appliances from "./Images/Capture6.PNG"
import Travel from "./Images/Capture8.PNG"
import Slide1 from './Images/slide1.jpg'
import Slide2 from './Images/slide2.jpg'
import Slide3 from './Images/slide3.webp'
import Slide4 from './Images/slide4.jpg'
import Deal1 from './Images/Deal1.PNG'
import Deal2 from './Images/Deal2.PNG'
import Deal3 from './Images/Deal3.PNG'
import Deal4 from './Images/Deal4.PNG'
import Deal5 from './Images/Deal5.PNG'
import Deal6 from './Images/Deal6.PNG'
import td1 from './Images/td1.PNG'
import td2 from './Images/td2.PNG'
import td3 from './Images/td3.PNG'
import td4 from './Images/td4.PNG'
import td5 from './Images/td5.PNG'
import td6 from './Images/td6.PNG'
import TopOffer from './TopOffer';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <div className="container-fluid shadow ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <img src={Offer} style={{width:"120px"}}/>
                  </div>
                  <div><a>Top Offer's</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Grocery}  />
                  </div>
                  <div><a>Grocery</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Mobile} />
                  </div>
                  <div><a>Mobiles</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Fashion} />
                  </div>
                  <div><a>Fashions</a></div>
                </div>
              </div>
            </div>


          </div>
          <div className="col-md-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <img src={Electronic} />
                  </div>
                  <div><a>Electronic's</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Home1} />
                  </div>
                  <div><a>Home</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Appliances} style={{width:"105px"}} />
                  </div>
                  <div><a>Appliances</a></div>
                </div>
                <div className="col-md-3">
                  <div>
                    <img src={Travel} style={{width:"150px"}}/>
                  </div>
                  <div><a>Travels</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="row" >
        {/* <!-- Carousel --> */}
<div id="demo" class="carousel slide" data-bs-ride="carousel" >

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active "></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner" style={{height:"50vh"}}>
    <div class="carousel-item active">
      <img src={Slide1} alt="Los Angeles" class="d-block  " style={{width:"100%"}}/>
    </div>
    <div class="carousel-item">
      <img src={Slide2} alt="Chicago" class="d-block " style={{width:"100%"}}/>
    </div>
    <div class="carousel-item">
      <img src={Slide3} alt="New York" class="d-block " style={{width:"100%"}}/>
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark py-5"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark py-5"></span>
  </button>
</div>

        {/* </div> */}
      </div>
      <div className="container-fluid my-3 ">
        <div className="row">
          <div className="col-md-12 ">
            </div>
          </div>
        </div>
      </div>

      <div className="row border">
        <div className="col-md-6 ">
          <h1 className="my-3 float-start mx-5" style={{ fontWeight: "bold", fontSize: "30px" }}>Deals Of the Day</h1>
        </div>
        <div className="col-md-6">
          <h1 className="btn btn-primary float-end me-4 my-3">VIEW ALL</h1>
        </div>

      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
           
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal1} className="card-img-top " alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Branded Kurta & Kurtis</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
          
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal2} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Computer Glasses</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
           
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal3} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Shirts And Trousers</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
           
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal4} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Decorative LED Lights</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
           
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal5} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Sukhhi,Yello Chimes..</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
          
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={Deal6} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Wall Clocks And Paintings</h5>
                <p className="card-text text-success">Under Rs499+Extra10%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="row border">
        <div className="col-md-6 ">
          <h1 className="my-3 float-start mx-5" style={{ fontWeight: "bold", fontSize: "30px" }}>Top Deals On Fashion</h1>
        </div>
        <div className="col-md-6">
          <h1 className="btn btn-primary float-end me-4 my-3">VIEW ALL</h1>
        </div>

      </div>


      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-2">
            
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td1} className="card-img-top " alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Popular Cargos</h5>
                <p className="card-text text-success">From Rs599</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
            
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td2} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Frack</h5>
                <p className="card-text text-success">From Rs499</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
            
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td3} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Shoes</h5>
                <p className="card-text text-success">From Rs399</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
          
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td4} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Girls Dresses</h5>
                <p className="card-text text-success">From Rs499</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
            
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td5} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Gowns</h5>
                <p className="card-text text-success">Upto 80%OFF</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
          <div className="col-md-2">
          
            <div className="card imgzoom" style={{ width: "12rem" }}>
              <img src={td6} className="card-img-top" alt="..." style={{ height: "180px" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "13px" }}>Branded Shoes</h5>
                <p className="card-text text-success">From Rs999</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <TopOffer />
      <Footer />

    </>
  )
}

export default Home
